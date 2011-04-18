require 'rubygems'
require 'sinatra'
require 'builder'
require 'haml'
require "digest/sha1"
require "rack-flash"
require "mongoid"
require "sinatra-authentication"
require 'yaml'

#application here
require './app/init'
require './app/routes'
require './app/models'
require './app/helpers'



