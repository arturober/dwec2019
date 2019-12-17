import { NgModule } from '@angular/core';
import { RouterModule, Route, PreloadAllModules } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Route[] = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'products', loadChildren: () =>
    import('./products/products.module').then(m => m.ProductsModule)},
  {path: '', pathMatch: 'full', redirectTo: '/welcome'},
  {path: '**', pathMatch: 'full', redirectTo: '/welcome'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
