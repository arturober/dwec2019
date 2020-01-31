import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './product-list/product-list.module#ProductListPageModule',
    pathMatch: 'full'
  },
  { path: 'add', loadChildren: './product-form/product-form.module#ProductFormPageModule' },
  { path: 'details/:id', loadChildren: './product-details/product-details.module#ProductDetailsPageModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
