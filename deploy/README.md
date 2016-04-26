## Vagrant

Use of the Vagrant file and `vagrant up` will create a VM running the hubot

To create slack integration `cp deploy/slack.env.example cp deploy/slack.env` and edit the new `cp deploy/slack.env` file to contain your slack/hubot integration API key.


## Cloudformation
To deploy a bot onto AWS infrastructure with maximum ease and minimal cost. Allows integration with CD services such as CodeShip.

Only supports the eu-west and eu-central regions so far.


## Useage
* Create AWS account
* Create an EC2 KeyPair
* Create a stack using the myhubot.cform template
* Connect your CD Service to the CodeDeploy Group output from the CloudFormation build

You'll need to get `slack.env` onto your box in `/etc/myhubot/slack.env` to integrate with slack. See deploy/slack.env.example for the format of the file.
