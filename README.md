Cloud Foundry API Docs
========

Built with [Slate](http://tripit.github.io/slate).

Getting Started
------------------------------

- Ensure you have the Ruby 2.2.4 installed
- Ensure you have the latest version of NodeJS installed
- Start the test server: `node_modules/.bin/gulp`
- You can now see the docs at <http://localhost:8000>.

Setting up AWS profile
-------------------------------

- Set up a new profile called new-docs using `aws configure --profile new-docs`
- This profile is used to upload docs to the `cloudcontroller-api-docs` bucket
