#various helpers methods here

def try(obj, field)  
  return nil unless obj
  if obj.respond_to? 'each_pair'
    return obj[field]
  else
    return obj.send field
  end
end

