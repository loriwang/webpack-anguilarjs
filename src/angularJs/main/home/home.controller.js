class HomeController {
    constructor(){
        'ngInject'
        this.text = 'this is Home';
        this.homeComponentInput = 'test angluarJs use angular input'
    }
    clickEvent(event){
        console.log(event)
    }
}
export default HomeController