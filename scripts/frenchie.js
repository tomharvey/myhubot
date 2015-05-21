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
    consumer_key: process.env.TUMBLR_CONSUMER_KEY,
    consumer_secret: process.env.TUMBLR_CONSUMER_SECRET,
    token: process.env.TUMBLR_TOKEN,
    token_secret: process.env.TUMBLR_TOKEN_SECRET
});


var main = function(robot) {
  robot.brain.on('loaded', function() {
      if (robot.brain.data.frenchie === undefined){
          robot.brain.data.frenchie = [];
      }
  });


  robot.respond(/frenchie/i, function(msg) {
    client.tagged('frenchie', {limit: 42}, function(error, data) {
      if (data.length > 0) {
          var myurl = null;
          data.forEach(function(post) {
              if (myurl !== null){
                 return;
              }

              if (post.type !== 'photo') {
                  return;
              }

              if (post.photos.length > 0){
                  myurl = post.photos[0].original_size.url;
                  if (robot.brain.data.frenchie.indexOf(myurl) === -1) {
                      robot.brain.data.frenchie.push(myurl);
                      return;
                  } else {
                      myurl = null;
                  }
              }
          });

          if (myurl === null) {
              msg.reply("Couldn't find any frenchies :(");
          } else {
              msg.reply(myurl);
          }
      }
    });
  });
};

module.exports = main;
