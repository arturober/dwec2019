import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Route[] = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: '', pathMatch: 'full', redirectTo: '/welcome'},
  {path: '**', pathMatch: 'full', redirectTo: '/welcome'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
