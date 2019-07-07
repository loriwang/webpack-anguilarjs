import { Component } from "@angular/core";

@Component({
    selector:'home',
    template:`
    <div>{{title}}</div>
    `
})
export class HomeComponent{
    title:string = 'this angular component use in angularJs is home title'
    constructor(){

    }
}