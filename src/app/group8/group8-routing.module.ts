import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Group8Page } from './group8.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: Group8Page,
    children:[
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
      },
      {
        path:'',
        redirectTo:'/group8/tabs/category',
        pathMatch:'full'
      },
      {
        path: 'note',
        loadChildren: () => import('./note/note.module').then( m => m.NotePageModule)
      }
    ]
  },
  {
    path:'',
    redirectTo:'/group8/tabs/category',
    pathMatch:'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Group8PageRoutingModule {}
