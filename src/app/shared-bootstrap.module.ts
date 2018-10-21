import { NgModule } from '@angular/core';  
import { AccordionModule } from 'ngx-bootstrap/accordion'  
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';  
import { ModalModule } from 'ngx-bootstrap/modal';  
import { TabsModule } from 'ngx-bootstrap/tabs';  
import { NgxWidgetGridModule } from 'ngx-widget-grid';

@NgModule({  
    imports: [AccordionModule.forRoot(), BsDropdownModule.forRoot(), ModalModule.forRoot(), TabsModule.forRoot(), NgxWidgetGridModule],  
    exports: [AccordionModule, BsDropdownModule, ModalModule, TabsModule,NgxWidgetGridModule],  
    declarations: [],  
    providers: []  
})  
  
export class SharedBootstrapModule {  
  
}  