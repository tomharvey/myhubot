// Description:
//   Some dialogue from the film "The Warriors"
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   warriors - come out to plaaaaaaa-i-aaaaay
//   riffs - YEAH, RIGHT!
//
// Author:
//   Fergus Doyle


var main = function(robot) {
  robot.hear(/warriors/i, function(msg) {
    msg.send("come out to plaaaaaaa-i-aaaaay");
  });
  robot.hear(/riffs/i, function(msg) {
    msg.send("YEAH, RIGHT!");
  });
};

module.exports = main;
