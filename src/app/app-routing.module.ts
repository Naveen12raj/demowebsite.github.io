import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'order',
    loadChildren:()=> import('./order/order.module').then(m=> m.OrderModule)
  },
  {
    path:'company',
    loadChildren:()=> import('./company/company.module').then(m=> m.CompanyModule)
  },
  {
    path:'faq',
    loadChildren:()=> import('./faq/faq.module').then(m=> m.FaqModule)
  },
  {
    path:'contact',
    loadChildren:()=> import('./contact/contact.module').then(m=> m.ContactModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
