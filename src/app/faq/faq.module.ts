import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq/faq.component';
import { AccordionComponent } from './accordion/accordion.component';
// import { FilterPipe } from '../pipes/filter.pipe';


@NgModule({
  declarations: [
    FaqComponent,
    AccordionComponent,
    // FilterPipe

  ],
  imports: [
    CommonModule,
    FaqRoutingModule,
    SharedModule,
    // FilterPipe,
    
  ]
})
export class FaqModule { }
