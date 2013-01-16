require 'grape'

require_relative 'helpers/session_helpers.rb'
require_relative 'helpers/product_helpers.rb'
require_relative 'entities/product_entity.rb'

module VersionEye
  class  ProductsApi < Grape::API
    helpers ProductHelpers
    helpers SessionHelpers
    
    resource :products do

      desc "get detailed informations for specific package"
      params do
        requires :prod_key, :type => String, :desc => "Product key"
      end
      get '/:prod_key' do
        prod_key = parse_product_key(params[:prod_key])
        product = Product.find_by_key prod_key
        if product.nil?
          error_msg = "No such package with product key: `#{prod_key}`."
          error! error_msg, 404
        end
        
        present product, with: Entities::ProductEntityDetailed
      end


      desc "search products from VersionEye"
      params do
        requires :q, :type => String, :desc => "Search query"
        optional :lang, :type => String, :desc => "Filter results by programming languages"
        optional :g, :type => String, :desc => "Specify group-id for Java projects"
        optional :page, :type => Integer, :desc => "Current page", :regexp => /^[\d]+$/
      end
      get '/search/:q' do
        query = parse_query(params[:q])
        group_id = params[:g]
        lang = get_language_param(params[:lang])
        page_nr = params[:page]
        if query.length < 2
          error! "Search term was too short.", 400
        end

        start_time = Time.now
        languages = get_language_array(lang)
        products = ProductService.search(query, group_id, languages, page_nr)
        #save_search_log(query, products, start_time)

        present products, with: Entities::ProductEntity
      end

      desc "as authorized user, you can check are you following this package already"
      params do 
        requires :prod_key, :type => String, :desc => "Package specifier"
      end
      get '/:prod_key/follow' do
        authorized?
        @current_product = fetch_product(params[:prod_key])
                 
        user_follows = Follower.where(user_id: @current_user.id, prod_id: @current_product.id).exists?
        {:prod_key => @current_product.prod_key, :follows => user_follows}
      end

      desc "follow favorite software package"
      params do
        requires :prod_key, :type => String, :desc => "Package specific key"
      end
      post '/:prod_key/follow' do
        authorized?
        @current_user = current_user
        @current_product = fetch_product(params[:prod_key])
        user_follow = Follower.new user_id: @current_user.id,
                                   product_id: @current_product.id
        if user_follow.save
          user_follow[:username] = @current_user.username,
          user_follow[:prod_key] = @current_product.prod_key
          user_follow[:follows] = true
          present user_follow, with: UserFollowEntity
        else
          {:success => false, 
           :msg => user_follow.errors.full_messages.to_sentence}
        end
      end

      desc "unfollow given software package"
      params do
        requires :prod_key, :type => String, :desc => "Package specifier"
      end
      delete '/:prod_key/follow' do
        authorized?
        @current_user = current_user
        @current_product = fetch_product(params[:prod_key])
        user_follow = Follower.where(user_id: @current_user.id, 
                                     product_id: @current_product.id).shift
        unless user_follow.nil?
          user_follow.delete
        end
        {success: true, msg: "unfollowed"} 
      end
    end
  end
end
