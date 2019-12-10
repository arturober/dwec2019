import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductIdGuard } from './guards/product-id.guard';
import { ProductDetailResolve } from './resolvers/product-detail.resolve';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { CanDeactivateGuard } from '../guards/can-deactivate.guard';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  {
    path: ':id',
    component: ProductDetailComponent,
    canActivate: [ProductIdGuard],
    resolve: {
      product: ProductDetailResolve
    }
  },
  {
    path: ':id/edit',
    component: ProductEditComponent,
    canActivate: [ProductIdGuard],
    canDeactivate: [CanDeactivateGuard],
    resolve: {
      product: ProductDetailResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
