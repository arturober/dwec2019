import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductIdGuard } from './guards/product-id.guard';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { ProductDetailResolve } from './resolvers/product-detail.resolve';

const routes: Route[] = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'products', component: ProductListComponent},
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    canActivate: [ProductIdGuard],
    resolve: {
      product: ProductDetailResolve
    }
  },
  {
    path: 'products/:id/edit',
    component: ProductEditComponent,
    canActivate: [ProductIdGuard],
    canDeactivate: [CanDeactivateGuard],
    resolve: {
      product: ProductDetailResolve
    }
  },
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
