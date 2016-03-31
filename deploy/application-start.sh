#!/bin/bash

cd /srv/myhubot
rm -r node_modules/
bin/hubot --adapter slack
