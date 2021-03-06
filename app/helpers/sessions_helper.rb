module SessionsHelper

  def enterprise_activated?
    if !EnterpriseService.activated?
      redirect_to "/"
      return false
    end
    return true
  end

  def sign_in(user)
    reset_session
    cookies.permanent.signed[:remember_token] = [user.id, user.salt]
    self.current_user = user
  end

  def sign_out
    cookies.delete(:remember_token)
    self.current_user = nil
  end

  def current_user=(user)
    @current_user = user
  end

  def current_user
    @current_user ||= user_from_remember_token
  end

  def current_user?(user)
    return false if user.nil?
    return nil   if current_user.nil?
    user.username.eql? current_user.username
  end

  def signed_in?
    !current_user.nil?
  rescue => e
    Rails.logger.error e.message
    Rails.logger.error e.backtrace.join("\n")
    false
  end

  def signed_in_admin?
    signed_in? && current_user.admin?
  rescue => e
    Rails.logger.error e.message
    Rails.logger.error e.backtrace.join("\n")
    false
  end

  def authenticate
    return true if signed_in?
    deny_access
    false
  end

  def authenticate_admin
    return true if signed_in_admin?
    deny_access
    false
  end

  def deny_access
    store_location
    redirect_to signin_path, :notice => 'Please sign in to access this page.'
  end

  def redirect_back_or(default)
    redirect_to(session[:return_to] || default, :status => 302)
    clear_return_to
  end

  def set_locale
    locale = 'en'
    I18n.locale = locale
  rescue => e
    Rails.logger.error e.message
    Rails.logger.error e.backtrace.join('\n')
    nil
  end

  def set_gh_scope scope = 'repo,user:email'
    cookies.permanent.signed[:gh_scope] = scope
  end

  def get_gh_scope
    'repo,user:email'
    # if Rails.env.enterprise?
    #  return 'repo, user:email'
    # end
    # scope = cookies.signed[:gh_scope]
    # scope = 'user:email' if scope.to_s.empty?
    # scope
  rescue => e
    Rails.logger.error e.message
    Rails.logger.error e.backtrace.join('\n')
    'repo,user:email'
  end

  def get_orga_for_login user
    orgas = OrganisationService.index(user, true)
    orgas = OrganisationService.index(user, false) if orgas.nil? || orgas.empty?
    orga  = if orgas.to_a.empty?
              OrganisationService.create_new_for(user)
            else
              orgas.first
            end
    cookies.permanent.signed[:orga] = orga.ids
    orga
  end

  private

    def user_from_remember_token
      User.authenticate_with_salt(*remember_token)
    rescue => e
      Rails.logger.info e.message
      Rails.logger.error e.backtrace.join("\n")
      nil
    end

    def remember_token
      cookies.signed[:remember_token] || [nil, nil]
    end

    def store_location
      session[:return_to] = request.fullpath
    end

    def clear_return_to
      session[:return_to] = nil
    end

end
