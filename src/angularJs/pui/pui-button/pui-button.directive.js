export default function() {
    'ngInject'
    let directive = {
        restrict: 'EA',
        replace: true,
        transclude: true,
        template:require('./pui-button.html'),
        scope: {
            size: '@',
        },
        link:function(scope, element, attr, ngModelController){

        }
    }
    return directive
}