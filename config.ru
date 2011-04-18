require './app'

set :environment, :production
disable :run

run Sinatra::Application