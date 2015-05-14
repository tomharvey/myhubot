// Description:
//   Returns a random strategy from Brian Eno & Peter Schmidt's Oblique
//   Strategies
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot strategy me
//
// Author:
//   Fergus Doyle


var generator_url = 'http://brianeno.needsyourhelp.org/draw';

var get_strategy = function(msg) {
    msg.http(generator_url).get()(function(err, res, body) {
       var strategy = JSON.parse(body);
       msg.reply(strategy.strategy);
    });
};

var main = function(robot) {
    robot.respond(/strategy me$/i, get_strategy);
};

module.exports = main;