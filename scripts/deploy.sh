#!/bin/sh
  ssh -p 57775 jenkins@159.89.101.72
  cd ~/www/jenkinstest
  git pull
  pm2 restart all