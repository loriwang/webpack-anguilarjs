import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'; 
import { UpgradeModule } from '@angular/upgrade/static';
import moduleName from './app'
@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        BrowserModule,
        UpgradeModule
     ],
    exports: [],
    providers: [],
})
class AppModule{
    constructor(private upgrade: UpgradeModule){
    }
    ngDoBootstrap(){
        this.upgrade.bootstrap(document.body, [moduleName]);
    }
}
export default AppModule