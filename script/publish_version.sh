#!/bin/bash
set -e -x

# This script must be run with an argument: either a final release number or 'release-candidate'

#  - Write the versionfile in source

ROOT_DIR=$(dirname $0)/..
VERSION=$1

if [[ $# -eq 0 ]]; then
  echo "You need to provide the version number as the first argument"
  exit 0
fi

touch $ROOT_DIR/source/versionfile
echo $VERSION > $ROOT_DIR/source/versionfile

#  - build the source directory

bundle exec middleman build

#  - Delete the versionfile

rm $ROOT_DIR/source/versionfile


#  - Check out to gh-pages

git checkout gh-pages

# - rewrite the index.html
rm index.html
touch index.html
echo "---
redirect_to: version/$VERSION/index.html
---" > index.html

#  - copy the build directory into versions/$1/..

if [[ $VERSION != 'release-candidate' && -d version/$VERSION ]]; then
  echo "That version already exists."
  exit 1
fi

mkdir -p version/$VERSION
mv build/* version/$VERSION

#  - Update the versions.json
  # - Grabs all the folder names
  # - Rewrites the versions.json

DIRS=`ls -l version | egrep '^d' | awk '{print $9}'`

rm versions.json
touch versions.json


echo -e '{
\t"versions": [' > versions.json


for DIR in $DIRS
do
  echo -e "\t\t\"$DIR\"," >> versions.json
done

echo -e '\t]
}' >> versions.json

# #  - Commit the changes and push to origin/gh-pages
git add index.html
git add versions.json
git add version/$VERSION
git commit -m "Version $VERSION"
# git push origin gh-pages

# #  - Check out master
# git checkout master
