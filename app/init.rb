use Rack::Session::Cookie, :secret => 'ranDOM session C00kie secret 58hgj345b'
use Rack::Flash

Mongoid.configure do |config|
  mongoid = YAML.load_file("./config/mongoid.#{settings.environment}.yml")
  config.master = Mongo::Connection.new(mongoid['host'], mongoid['port'].to_i).db(mongoid['name'])
  auth = config.master.authenticate(mongoid['username'], mongoid['password']) if mongoid['username']
end

