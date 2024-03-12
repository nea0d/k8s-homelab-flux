#!/bin/bash
echo initializing mm modules
cd /opt/magic_mirror/modules
set -ex
cat /tmp/config/modules.ini | while read module
do
  echo installing $module
  git clone $module
  folder=$(echo $module | sed -r 's|.*\/(.*)|\1|g' | xargs)
  cd $folder
  npm install --omit=dev || true
  cd ..
done
