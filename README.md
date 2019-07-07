# 测试 angularJS 升级到angular8

angularJs 的webpack环境已经搭建完成

## 升级angular必要的准备

### 1.angular/upgrade

现在我们先安装 `@angular/upgrade` , 这个包主要是为了让angularJs和angular共存

```ts
npm i @angular/upgrade
```

并且在webpack配置指定

```js
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.html'],
        alias: {
            "@angular/upgrade/static": "@angular/upgrade/bundles/upgrade-static.umd.js"
        }
    },
```

### 2.ts-loader

我们需要安装一下 `ts-loader` 并且在webpack中进行配置

```js
{
    test: /\.tsx?$/,
    use: ['ts-loader'],
    exclude: /node_modules/
}
```
还需要增加`tsconfig.json`文件
```json
{
    "compilerOptions": {
      "target": "es5",
      "module": "commonjs",
      "moduleResolution": "node",
      "sourceMap": true,
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "lib": [ "es2015", "dom" ],
      "noImplicitAny": true,
      "suppressImplicitAnyIndexErrors": true
    }
  }
```
我们将使用与Angular完全相同的设置，但我们的AngularJS代码有一个例外。将“noImplicitAny”选项更改为false：
```json
"noImplicitAny": false
```
### 3.安装angular相关的包
```json
  "dependencies": {
    "@angular/common": "^8.1.0",
    "@angular/compiler": "^8.1.0",
    "@angular/core": "^8.1.0",
    "@angular/forms": "^8.1.0",
    "@angular/platform-browser": "^8.1.0",
    "@angular/platform-browser-dynamic": "^8.1.0",
    "@angular/router": "^8.1.0",
    "rxjs": "^6.5.2",
    "zone.js": "^0.9.1"
  }
```
除此之外我们还需要安装一些补充包
```json
  "dependencies": {
    "core-js": "^3.1.4",
    "reflect-metadata": "^0.1.13",
  }
```
* `core-js` 使用ES6或ES2015的某些功能修补全局上下文或window
* `reflect-metadata` 是一个polyfill库，用于Angular在其类中使用的注释。
可以直接复制下来放到我们的`package.json`文件中去,然后运行`npm install`
## 4.更改启动方式
如果你还是以放在`index.html`中的`ng-app`命令来启动的话,要换成`bootstrap`的方式启动
比如原来的是
```html
<!DOCTYPE html>
<html lang="en" ng-app="app">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document11111</title>
</head>
<body>
    <div ui-view></div>
</body>
</html>
```
删除html的`ng-app`在js中启动

```js
angular.module('app', [uiRouter,'puiComponent','mgcrea.ngStrap'])
    .config(routerConfig)
    /* ....  */
angular.bootstrap(document.body,['app'])
```

## 开始升级angular
那么现在我们开会着手升级angular了
### 1.改变app.js文件
根据官方推荐 我们要首先把`angularJs`的`app.js`文件更改成  `app.ts`,当然 `webpack.config`的`entry`别忘记进行更改,
官方推荐 `anglar`的module  文件名为 `angular.module.ts`
比如
```js
entry:{
        main: path.resolve(__dirname, './app.ts'),
}
```
但是我们改完发现还是打包报错
```js
angular.js:138 Uncaught Error: [$injector:modulerr] Failed to instantiate module app due to:
Error: [$injector:modulerr] Failed to instantiate module undefined due to:
Error: [ng:areq] Argument 'module' is not a function, got undefined
```
这是我们需要为TypeScript安装一些类型定义，以便在开发应用程序时帮助我们。
我们需要安装
```t
    "@types/angular": "^1.6.54",
```
更改一下 `angularJs` `ui-router`的导入
```js
import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';
```
好了 现在可以去运行一下`webpack`的 `server`或者`dist`命令了 可以看到代码能够平稳的运行,说明目前我们的angularJs在ts环境中暂时没有什么问题了

