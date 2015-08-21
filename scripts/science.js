// Description:
//   Celebrates NGT and science
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   science!
//
// Author:
//   Tom Harvey

var main = function(robot) {
  robot.hear(/science!/i, function(msg) {
    msg.send('http://www.reactiongifs.us/wp-content/uploads/2015/05/science_neil_degrasse_tyson.gif');
  });
};

module.exports = main;
