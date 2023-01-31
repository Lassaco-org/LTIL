import { Component } from '@angular/core';

@Component({
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrls: ['./home-projects.component.scss']
})
export class HomeProjectsComponent {
  projects = [
    {
      id: 1,
      icon: 'assets/img/svg/home.svg',
      title: 'Rural Technology',
      description: 'Rural Telephony: Lasaco trading and investment limited I in partnership with ICSL to invest in the rural telephony space. Rural telephony is an initiative being sponsored by the NCC (Nigerian Communications Commission) to provide Cellular or GSM coverage to the outer reaches or more rural areas of the country.'
    },
    {
      id: 2,
      icon: 'assets/img/svg/wallet-check.svg',
      title: 'Partnership MCL',
      description: 'LTIL is in partnership with MCL Solutions Limited, a finance consultancy and software development company incorporated in Nigeria in July, 2004.'
    },
    {
      id: 3,
      icon: 'assets/img/svg/chart.svg',
      title: 'National Aviation Handling Company and MCL solutions.',
      description: 'Fixed asset register management services to manage and enhance our clients’ fixed asset value.'
    }
  ]
  
}
