UI Snippets

**Dependencies**
* [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)
* [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
* [grunt-jshint-stylish](https://github.com/sindresorhus/jshint-stylish)
* [grunt-jsbeautifier](https://github.com/vkadam/grunt-jsbeautifier)

**Launching server from grunt**
* Default/App Server ( [http://localhost:6234/](http://localhost:6234/) )
```bash
grunt appServer
```
**Build
* build application
```bash
grunt build
```
** js linting
* lint grunt module(s)
```bash
grunt lintGrunt
```
* lint application
```bash
grunt lintApp
```
* lint grunt and application module(s)
```bash
grunt lint
```
** beautify source code
* beautify html, css, js
```bash
grunt beautify
```