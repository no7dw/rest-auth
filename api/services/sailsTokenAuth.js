module.exports.verifyUserAndToken = function(uid,token, callback) {
  Token.native(function(err,collection){
    if(err){
      callback(err);
    }else{
      collection.GET(token,function(err,data){
        if(err || !data){
          callback(err);
        }else{
          if(uid && uid == data)
            callback(null,true);
          else
            callback(null,false) ;
        }
      });
    }
  });
};