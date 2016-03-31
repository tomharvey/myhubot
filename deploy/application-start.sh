#!/bin/bash

cd /srv/myhubot
rm -r node_modules/
nohup bin/hubot &

echo 'Bot started'

exit
