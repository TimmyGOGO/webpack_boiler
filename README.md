# **Evolving boilerplate:**

**First Commit:** Webpack react simple boilerplate
_the basis is a simple webpack+react+js boilerplate from_:
_reference_: https://www.valentinog.com/blog/babel/

In order to set up the initial environment, you need to run terminal commands:

1. npm i
2. npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
3. npm i webpack webpack-cli html-webpack-plugin html-loader webpack-dev-server --save-dev

**Second Commit:** Webpack react js+typescript boilerplate
Actions to alter the previous project in js to typescript:

1. Run terminal commands:
   npm i typescript --save-dev
   npm i @babel/preset-typescript @types/react @types/react-dom
2. Add to .babelrc:
   ```
   "presets": [..., "@babel/preset-typescript", ...]
   ```
3. Add to webpack.config.js:
   in order to use both javascript and typescript:
   ```
   {
       test: /\.(ts|js)x?$/,
       exclude: /(node_modules|bower_components)/,
       use: ['babel-loader']
   },
   ...
   resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
   ...
   ```
4. Create tsconfig.js:

   ```
   {
       "compilerOptions": {
       "outDir": "./public/",
       "noImplicitAny": true,
       "module": "es6",
       "target": "esnext",
       "jsx": "react",
       "allowJs": true,
       "moduleResolution": "node",
       "noEmit": true,
       "strict": true,
       "isolatedModules": true,
       "esModuleInterop": true,
       "resolveJsonModule": true,
       "baseUrl": ".",
       "paths": {
           "*": ["node_modules/*", "typings/*"]
       }
       },
       "include": ["src"]
   }
   ```
   
# **Extras:**

**Using extra plugins for babel:**
In order to add properties to classes and rest operator:
    ```
    npm i @babel/plugin-proposal-class-properties", "@babel/plugin-proposal-object-rest-spread
    ```
and add to .babelrc:
    ```
    {
        "plugins": ["@babel/proposal-class-properties", "@babel/proposal-object-rest-spread"]
    }
    ```

**Custom Fonts for your app:**:
   1. [Locally]: Use a font from your project's folder:
   **Important thing: DO NOT USE 'format(truetype)' or 'format(embedded-opentype)'**
   **this somehow spoils everything**
   ```
   @font-face {
    font-family: 'Dobrozrachniy-Regular';
    src: url('../static/fonts/Dobrozrachniy-Regular.ttf');
    font-weight: 300;
    }
   ```
   2. [Remotely]: Use a font from google.fonts.com:
   Add link from site to <link> in index.html in <head>:
   ```
   <link href="https://fonts.googleapis.com/css?family=Cinzel&display=swap" rel="stylesheet">
   ```

**Adding scss and sass:**
   1. To install: ``` npm install --save-dev node-sass sass-loader style-loader css-loader ```
   2. To understand: 
      - **node-sass** provides binding for Node.js to LibSass, a Sass compiler.
      - **sass-loader** is a loader for Webpack for compiling SCSS/Sass files.
      - **style-loader** injects our styles into our DOM.
      - **css-loader** interprets @import and @url() and resolves them.
   3. Edit webpack.config.js:
      ```
      module.exports = {
        module: {
          rules: [
            {
              test: /\.scss$/,
              use: [
                'style-loader', // creates style nodes from JS strings
                'css-loader', // translates CSS into CommonJS
                'sass-loader', // compiles Sass to CSS, using Node Sass by default
              ],
            },
          ],
        },
      }; 
      ```
      for more details: https://github.com/webpack-contrib/sass-loader
