# Sails.js + React.js + Webpack Starter

This is a starter kit to kickstart your Sails.js & React.js app with Grunt Webpack and Grunt Babel.

## Getting Started

##### Prerequisites
* git
* [nodejs](http://nodejs.org)
* [npm](http://npmjs.org)

```bash
git clone https://github.com/narayananramu/sails-react-webpack-starter.git
cd sails-react-webpack-starter
npm install
sails lift
open http://localhost:1337
```

##### Working
* Save your React JSX code at react/source
* Grunt-Babel compiles JSX to JS and stores it at react/compiled
* Grunt-Webpack bundles index.js from react/compiled into main.js into assets/js/bundle

## Start from Scratch
1. Install Sails
    ```
    sudo npm -g install sails
    ```
2. Create new Sails project
    ```
    sails new sails-react-webpack-starter
    ```
3. Change directory to 
    ```
    sails-react-webpack-starter
    ```
4. Install grunt-babel
    ```
    npm install grunt-babel babel-preset-es2015 babel-preset-react --save
    ```
5. Edit ```compileAssets.js syncAssets.js tasks/config/babel.js``` to support jsx files

6. Create File ```.babelrc``` in the project root
    ```
    {
      "presets": ["es2015","react"]
    }
    ```

7. Install webpack-dev-server webpack grunt-webpack
    ```
    npm install webpack-dev-server webpack grunt-webpack --save
    ```

8. Edit ```compileAssets.js syncAssets.js tasks/config/webpack.js``` to support bundling react source and libraries

9. Create directories according to your configuration

10. Edit ```watch.js``` to watch your react source directory for changes

11. Create your main JSX (say index.jsx) file and enjoy!