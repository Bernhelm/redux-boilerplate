Redux Boilerplate
===========

> Redux Boilerplate with Webpack, Babel, SASS, mocha, istambul, express on board

Credits to Christoph von Gellhorn. This boilerplate is based on [webpack-boilerplate](https://github.com/cvgellhorn/webpack-boilerplate)

## Requirements
You only need <b>node.js</b> pre-installed and you’re good to go.

## Download
Download in current directory
```sh
$ curl -L -o master.zip https://github.com/Bernhelm/redux-boilerplate/archive/initial.zip && unzip master.zip && rm master.zip && mv ./redux-boilerplate-master/{.,}* ./ && rm -r ./redux-boilerplate-master
```

## Setup
Install dependencies
```sh
$ npm install
```

## Development
Run the local webpack-dev-server with livereload and autocompile on [http://localhost:9000/](http://localhost:9000/)
```sh
$ npm start
```
## Deployment
Build the current application
```sh
$ npm run build
```

## [webpack](https://webpack.js.org/)
If you're not familiar with webpack, the [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) will serve the static files in your build folder and watch your source files for changes.
When changes are made the bundle will be recompiled. This modified bundle is served from memory at the relative path specified in publicPath.
