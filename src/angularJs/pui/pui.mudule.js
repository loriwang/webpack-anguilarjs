
import puiButtonDirective from "./pui-button/pui-button.directive";
import * as angular from 'angular';
import './pui-style.less';
angular.module('puiComponent',[])
.directive('puiButton',puiButtonDirective)
    