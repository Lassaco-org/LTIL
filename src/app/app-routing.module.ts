import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./default/default.module').then((m: any) => m.DefaultModule),
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent,
  //   data: {
  //     title: 'Not Found',
  //     description: 'Description Meta Tag Content',
  //   },
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
