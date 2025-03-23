import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'app',
    loadChildren:() => import('./pages/pages.module').then(m => m.PagesModule),
  },
  {
    path: '',
    redirectTo: '/app/mascotas',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/app/mascotas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
