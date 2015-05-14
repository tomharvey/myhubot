# Description:
#   Hubot delivers a pic from Reddit's /r/AnimalsBeingJerks frontpage
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   animal me - Display a picture from /r/AnimalsBeingJerks
#
# Author:
#   eliperkins
#   tonybajan

module.exports = (robot) ->
  robot.brain.on 'loaded', ->
    return robot.brain.data.animal || (robot.brain.data.animal = [])

  robot.respond /animal me/i, (msg) ->
    robot.http('http://www.reddit.com/r/AnimalsBeingJerks.json')
      .get() (err, res, body) ->
        result = JSON.parse(body)

        urls = [ ]
        for child in result.data.children
          url = child.data.url.replace(/gifv$/,'gif')

          validType = /\.gif|\.jpe?g$|\.png$|youtube\.com\/watch/i.test(url)
          notPostedBefore = robot.brain.data.animal.indexOf(url) == -1
          sfw = not child.data.over_18

          if sfw and validType and notPostedBefore
              urls.push(url)

        if urls.length == 0
          msg.send "Couldn't find any new animals..."
          return

        robot.brain.data.animal.push(urls[0])
        msg.send urls[0]
