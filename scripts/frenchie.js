// Description:
//   Gives you a frenchie
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   ofb frenchie
//
// Author:
//   Rali/Jon

var tumblr = require('tumblr.js');
var client = tumblr.createClient({
  consumer_key: 'U4oHo05i6CgGGNUnluIl7TkAFKofaDEev1DVNTc6VrLJilY4tm',
  consumer_secret: 'HiWvmohxGv1uqXswR8FKVekGrbsCglkBGg11WPoZuZ6P9PItds',
  token: 'lqMeWKKbzFUv5y6B1cZ2cC7KF0sLM4mKAUQsqjOiQYPeqOh19Y',
  token_secret: '7cPfTNlZ5VEpJYNMEWBa3Z9YPiOeTD7KFwqw4eqjQ7iUfAWo8T'
});


var main = function(robot) {
  robot.brain.on('loaded', function(){
    console.log('foo', robot.brain.frenchie)
      if (robot.brain.data.frenchie === undefined){
          robot.brain.data.frenchie = [];
      }
  });


  robot.respond(/frenchie/i,function(msg) {
    client.tagged("frenchie", {type: "photo", limit: 20},function(error, data){
      if (data.length > 0){

          var myurl = null;
          data.forEach(function(post){
              if (myurl !== null){
                 return;
              }

              if (post.photos.length>0){
                  myurl = post.photos[0].original_size.url;
                  if (robot.brain.data.frenchie.indexOf(myurl) !== -1){
                      robot.brain.data.frenchie.push(myurl);
                      return;
                  }
                  else{
                      myurl = null;
                  }
              }
          })

          msg.reply(myurl);
      }
    });
  });
};

module.exports = main;
