import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LogoutActivateGuard } from './guards/logout-activate.guard';
import { LoginActivateGuard } from './guards/login-activate.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule', canActivate: [LogoutActivateGuard] },
  { path: 'products', loadChildren: './products/products.module#ProductsModule', canActivate: [LoginActivateGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
