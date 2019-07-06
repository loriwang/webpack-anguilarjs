function HeaderDirective(){
    let directive ={
        restrict:'EA',
        template:require('./header.directive.html'),
        controller:HeaderDirectiveController,
        controllerAs:'header',
    }
    return directive
}
class HeaderDirectiveController{
    constructor($injector,$state){
        'ngInject'
        this.$state = $state;
        this.text = 'this is header and this is headerContoller compile'
    }
    logout(){
        this.$state.go('login')
    }
}
export default HeaderDirective;