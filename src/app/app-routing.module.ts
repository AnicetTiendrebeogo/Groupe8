import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'group8',
    pathMatch: 'full'
  },
  {
    path: 'group8',
    loadChildren: () => import('./group8/group8.module').then( m => m.Group8PageModule)
  },
  {
    path: 'stat',
    loadChildren: () => import('./stat/stat.module').then( m => m.StatPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
