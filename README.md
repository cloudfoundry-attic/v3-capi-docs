Cloud Foundry API Docs
========

Built with [Slate](http://tripit.github.io/slate).

How to Use this Repo
-----------------------------
Because we use Github Pages to host our docs, the layout of this repo is somewhat unintuitive.

The `gh-pages` branch and the `master` branch contain totally different content. 

The `master` branch contains the Markdown source files for the docs. We modify this content. 

The `gh-pages` branch contains built content that we want to host. We expect this content to remain relatively static.


Getting Started
------------------------------

- Ensure you have the Ruby 2.2.4 installed
- Ensure you have Bundler installed and have run `bundle install` in the root directory
- Ensure you have the latest version of NodeJS installed
- Start the test server: `npm start`
- You can now see the docs at <http://localhost:8000>.


Pushing a Final Version of the Docs to Github Pages
-------------------------------
We have a script that will do this for you. 

Simply call `script/publish_version.sh` with the CF release version number that you want the docs to display, and the script will build the docs and copy the resulting directory to the `gh-pages` branch. It will also make a commit and push to the gh-pages branch for you. 
 
**Please note that calling this script does push what is in your source directory to the live docs.**


Setting up AWS profile
-------------------------------

- Set up a new profile called new-docs using `aws configure --profile new-docs`
- This profile is used to upload docs to the `cloudcontroller-api-docs` bucket
