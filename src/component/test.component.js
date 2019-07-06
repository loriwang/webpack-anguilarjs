class TestComponentController{
    constructor(){
        'ngInject'
    }
}


const TestComponent = {
    controller:TestComponentController,
    controllerAs:'test',
    template:`
        <h2>
            this is  test component
        </h2>
    `
}
export default TestComponent