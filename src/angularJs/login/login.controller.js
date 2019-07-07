class LoginController {
    constructor($injector,$state){
        'ngInject'
        this.$state = $state
        this.userName = '';
        this.userPassword = '';
    }
    login(){
        console.log(this.$state);
        this.$state.go('main.home')
        setTimeout(() => {
            console.log(this.userName);
            console.log(this.userPassword)
        })
    }
}
export default LoginController