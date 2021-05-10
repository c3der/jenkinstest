#!/bin/sh
ssh -p 57775 jenkins@159.89.101.72 <<EOF
  cd ~/www/jenkinstest
  git checkout main
  git pull
  pm2 restart all
  exit
EOF