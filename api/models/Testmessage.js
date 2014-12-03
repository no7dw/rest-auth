/**
* Testmessage.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    name:{
      type:"string",
      required:true,
      minLength: 2
    },
    empnum:{
      type:"string",
      required:true

    }
  },
  beforeValidate: function(values, next) {

    console.log('before beforeValidate');
    //method 2:
    isOpItself= function(values, cb){
      // 1.check if the token 与 id 一一对应， 作为身份认证
      // 2.check if rtoken xtoken
      // 3.if this is not convient for all router, add it in custom middleware
      console.log("values in is op itself",values);
      uid = 's001';
      sailsTokenAuth.verifyUserAndToken(uid,values.request_token,function(err,result){
        if(result) {
          console.log("success !") ;
          cb();
        }else{
          cb({code:1,"message":"can not be access !"}) ;
        }
      });
    },
        isOpItself(values, function(err, result){
          next(err);

        })

  }
  //method 3: may not work , not passing uid but token , backend cal uid according token

};

