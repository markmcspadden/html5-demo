require "rubygems"
require "sinatra"

DIR = 'public'
set :public, DIR

get '/' do
  redirect "/index.html"
end

run Sinatra::Application