#routes here
  
get '/' do
#  login_required to invoke authentication

  haml :"index"
end

#errors

not_found do
  haml :"errors/404"
end


#stylesheets

get '/stylesheet.css' do 
  scss :stylesheet
end


