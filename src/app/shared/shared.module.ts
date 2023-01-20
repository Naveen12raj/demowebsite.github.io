import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { CategoryComponent } from './category/category.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { BreadcrumComponent } from './breadcrum/breadcrum.component';



@NgModule({
  declarations: [
    CategoryComponent,
    BannerComponent,
    FilterPipe,
    BreadcrumComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[BannerComponent,CategoryComponent,BreadcrumComponent,FilterPipe]
})
export class SharedModule { }
