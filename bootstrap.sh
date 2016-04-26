#!/usr/bin/env bash

curl -sL https://deb.nodesource.com/setup | bash -

apt-get update
apt-get install -y nginx nodejs redis-server

rm /etc/nginx/sites-enabled/default

mkdir -p /etc/myhubot

if ! [ -L /srv/myhubot ]; then
  ln -fs /vagrant/myhubot /srv/
fi

cp /vagrant/deploy/upstart/hubot.conf /etc/init/hubot.conf

if ! [ -L /etc/myhubot/slack.env ]; then
  ln -fs /vagrant/deploy/slack.env /etc/myhubot/
fi

if ! [ -L /etc/nginx/sites-enabled/hubot.vhost ]; then
  ln -fs /vagrant/deploy/nginx/hubot.vhost /etc/nginx/sites-enabled/
fi

/etc/init.d/nginx restart
service hubot start
