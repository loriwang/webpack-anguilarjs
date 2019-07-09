import { Component ,Input,Output, EventEmitter} from "@angular/core";

@Component({
    selector:'home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.less']
})
export class HomeComponent{
    title:string = 'this angular component use in angularJs is home title'
    @Input() testInput:string
    @Output() clickedEvent = new EventEmitter<any>()
    constructor(){

    }
    clickEvent(){
        this.clickedEvent.emit('test output')
    }
}