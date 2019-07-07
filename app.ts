// import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import AppComponent from './app.component'
import TestComponent from './src/component/test.component'
import LoginController from './src/login/login.controller'
import hightlightDirective from './src/directive/hightlight.directive'
import routerConfig from './router'
import HeaderDirective  from './src/directive/header/header.directive';
import HomeController from './src/main/home/home.controller';
import 'angular-strap';
import { downgradeComponent} from "@angular/upgrade/static"
import "./src/pui/pui.mudule"
declare var  angular:angular.IAngularStatic;

import './src/main.less';
import { HomeComponent } from './src/angular/component/home.component';
const MODULE_NAME = 'app1'
angular.module(MODULE_NAME, [uiRouter,'puiComponent','mgcrea.ngStrap'])
    .config(routerConfig)
    .controller('loginController', LoginController)
    .directive('hightlight',hightlightDirective)
    .directive('appHeader',HeaderDirective)
    .component('app', AppComponent)
    .component('test', TestComponent)
    .controller('homeController',HomeController)
    .directive('home',downgradeComponent({
        component:HomeComponent
    }) as angular.IDirectiveFactory)
    .run(() => {
        console.log(`this is just test`)
    })

export default MODULE_NAME;