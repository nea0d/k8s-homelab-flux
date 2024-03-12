echo initializing mm modules
cd /opt/magic_mirror/modules
set -ex
#delete all directories except the default one
find ./ -mindepth 1 -name default -prune -o -exec rm -rf {} +
MODULES="/tmp/config/modules.ini"
while read -r module || [ -n "$module" ]
do
  echo "installing $module"
  git clone $module
  folder=$(echo $module | sed -r 's|.*\/(.*)|\1|g' | xargs)
  cd $folder
  npm install --omit=dev || true
  cd ..
done < $MODULES
