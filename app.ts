import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import AppComponent from './app.component'
import TestComponent from './src/component/test.component'
import LoginController from './src/login/login.controller'
import hightlightDirective from './src/directive/hightlight.directive'
import routerConfig from './router'
import HeaderDirective  from './src/directive/header/header.directive';
import HomeController from './src/main/home/home.controller';
import 'angular-strap';
import "./src/pui/pui.mudule"

import './src/main.less';
const MODULE_NAME = 'app1'
console.log(angular);
angular.module(MODULE_NAME, [uiRouter,'puiComponent','mgcrea.ngStrap'])
    .config(routerConfig)
    .controller('loginController', LoginController)
    .directive('hightlight',hightlightDirective)
    .directive('appHeader',HeaderDirective)
    .component('app', AppComponent)
    .component('test', TestComponent)
    .controller('homeController',HomeController)
    .run(() => {
        console.log(`this is just test`)
    })

export default MODULE_NAME;