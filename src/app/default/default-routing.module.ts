import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BoardComponent } from './components/board/board.component';
import { CareerComponent } from './components/career/career.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ManagementComponent } from './components/management/management.component';
import { DefaultComponent } from './default.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {
          title: 'Home',
          description: 'Description Meta Tag Content',
        },
      },
      {
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'About',
          description: 'Description Meta Tag Content',
        },
      },
      {
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'About',
          description: 'Description Meta Tag Content',
        },
      },
      {
        path: 'about/management',
        component: ManagementComponent,
        data: {
          title: 'Management',
          description: 'Description Meta Tag Content',
        },
      },
      {
        path: 'about/board',
        component: BoardComponent,
        data: {
          title: 'Board',
          description: 'Description Meta Tag Content',
        },
      },
      {
        path: 'career',
        component: CareerComponent,
        data: {
          title: 'Career',
          description: 'Description Meta Tag Content',
        },
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contact',
          description: 'Description Meta Tag Content',
        },
      },
      { path: '', redirectTo: '/', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
