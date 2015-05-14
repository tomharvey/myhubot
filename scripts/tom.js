// Description:
//   Gives you a Tom style motivation
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   ofb tom (motivation|me) - Tom shows up to motivate you
//
// Author:
//   Mar

var main = function(robot) {
  robot.respond(/(tom\s?motivation|tom|tom\s?me)/i, function(msg) {
    msg.reply("http://s1.postimg.org/cdxvo0tan/poster.jpg");
  });
};

module.exports = main;
