require 'spec_helper'

describe PodSpecParser do

  # describe '#parse' do

  # 	it "should read a podspec file and return product, date, version, dependencies, developer" do

  # 	end

  # end

  before :each do
    @podspec = PodSpecParser.load_spec './fixtures/files/podspec/twitter-text-objc.podspec'
  end

  describe '#version' do
    it "should convert the version" do
      version = PodSpecParser.version @podspec
      version.should.be_kind_of Version 
    end

    # it "should convert the license" do
    # end
  end

  # describe '#repository' do
  #   it "should return a git repository" do
  #   end

  #   it "should warn if there are other repositories" do
  #   end
  # end

  # describe '#developers' do
  #   it "should be empty without developers" do
  #     #PodSpecParser.developers(nil)
  #   end
  # end

end