require "rubygems"
require "sinatra"

DIR = 'public'
set :public, DIR

get '/' do
  read('index.html')
end

def read(*parts)
  File.read(File.join([ DIR ] + parts))
end

run Sinatra::Application