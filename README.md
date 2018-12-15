Focus Agency Mini Website
----

[![Build Status](https://travis-ci.org/garciadiazjaime/website-focus-agency.svg)](https://travis-ci.org/garciadiazjaime/website-focus-agency)

Run project:
----
a) let's install all packages:

`npm install`

b) let's run dev server

`npm run dev`

By default server will run on http://0.0.0.0:3070/

Note: `npm run sprites` requires 'sass'
http://sass-lang.com/install

Deploy project
`npm run update`
`git status`
`git diff`
`npm run deploy`

Login rch
rch setup -l email

Remove Cartridge
http://stackoverflow.com/questions/31323791/how-do-you-delete-a-database-cartridge-on-an-openshift-app

Setting up Envs
rhc env set NPM_CONFIG_PRODUCTION=true -a app
rhc env set DB_NAME=value -a app
rhc env set DB_USER=value -a app
rhc env set DB_PASSWORD=value -a app
rhc env set DJANGO_SETTINGS_MODULE=settings.prod -a app
rhc env set SENDGRID_API_KEY=value -a app

Checking Envs
rhc env list -a app

Code to increase jslint max line length limit
/* eslint max-len: [2, 500, 4] */

Slider Element
https://github.com/akiran/react-slick


docker build -t garciadiazjaime/website-focusagency .
docker run -d -p 49170:3070 garciadiazjaime/website-focusagency
docker push garciadiazjaime/website-focusagency
docker pull garciadiazjaime/website-focusagency