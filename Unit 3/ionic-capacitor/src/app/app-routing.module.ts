import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'camera',
    pathMatch: 'full'
  },
  {
    path: 'vibration',
    loadChildren: () => import('./vibration/vibration.module').then( m => m.VibrationPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'clipboard',
    loadChildren: () => import('./clipboard/clipboard.module').then( m => m.ClipboardPageModule)
  },
  {
    path: 'device',
    loadChildren: () => import('./device/device.module').then( m => m.DevicePageModule)
  },
  {
    path: 'filesystem',
    loadChildren: () => import('./filesystem/filesystem.module').then( m => m.FilesystemPageModule)
  },
  {
    path: 'geolocation',
    loadChildren: () => import('./geolocation/geolocation.module').then( m => m.GeolocationPageModule)
  },
  {
    path: 'keyboard',
    loadChildren: () => import('./keyboard/keyboard.module').then( m => m.KeyboardPageModule)
  },
  {
    path: 'local-notifications',
    loadChildren: () => import('./local-notifications/local-notifications.module').then( m => m.LocalNotificationsPageModule)
  },
  {
    path: 'modals',
    loadChildren: () => import('./modals/modals.module').then( m => m.ModalsPageModule)
  },
  {
    path: 'motion',
    loadChildren: () => import('./motion/motion.module').then( m => m.MotionPageModule)
  },
  {
    path: 'network',
    loadChildren: () => import('./network/network.module').then( m => m.NetworkPageModule)
  },
  {
    path: 'share',
    loadChildren: () => import('./share/share.module').then( m => m.SharePageModule)
  },
  {
    path: 'storage',
    loadChildren: () => import('./storage/storage.module').then( m => m.StoragePageModule)
  },
  {
    path: 'toast',
    loadChildren: () => import('./toast/toast.module').then( m => m.ToastPageModule)
  },
  {
    path: 'driving-directions',
    loadChildren: () => import('./driving-directions/driving-directions.module').then( m => m.DrivingDirectionsPageModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./app/app.module').then( m => m.AppPageModule)
  },
  {
    path: 'google-login',
    loadChildren: () => import('./google-login/google-login.module').then( m => m.GoogleLoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
