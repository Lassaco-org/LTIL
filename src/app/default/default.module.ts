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
import { HomeServicesComponent } from './components/home/home-services/home-services.component';
import { CareerComponent } from './components/career/career.component';
import { HomeProjectsComponent } from './components/home/home-projects/home-projects.component';
import { HomeTeamComponent } from './components/home/home-team/home-team.component';
import { ManagementComponent } from './components/about/management/management.component';
import { BoardComponent } from './components/about/board/board.component';
import { ServicesComponent } from './components/services/services.component';
import { TeamDetailsComponent } from './components/about/team-details/team-details.component';


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HomeHeroComponent,
    HomeAboutComponent,
    HomeServicesComponent,
    CareerComponent,
    HomeProjectsComponent,
    HomeTeamComponent,
    ManagementComponent,
    BoardComponent,
    ServicesComponent,
    TeamDetailsComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    SharedModule
  ]
})
export class DefaultModule { }
