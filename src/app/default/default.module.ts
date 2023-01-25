import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { HomeHeroComponent } from './components/home/home-hero/home-hero.component';
import { HomeAboutComponent } from './components/home/home-about/home-about.component';


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HomeHeroComponent,
    HomeAboutComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    SharedModule
  ]
})
export class DefaultModule { }
