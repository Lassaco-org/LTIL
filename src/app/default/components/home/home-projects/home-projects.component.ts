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
      description: 'Rural Telephony: Lasaco trading and investment limited is in partnership with ICSL to invest in the rural telephony space. The aim of rural telephony is to improve communication infrastructure and services in rural areas, which are often underserved and have limited access to technology and communication services. This project is an initiative being sponsored by the NCC (Nigerian Communications Commission) to provide Cellular or GSM coverage to the outer reaches or more rural areas of the country.'
    },
    {
      id: 2,
      icon: 'assets/img/svg/wallet-check.svg',
      title: 'Partnership with MCL solutions',
      description: 'LTIL is in partnership with MCL Solutions Limited, a finance consultancy and software development company incorporated in Nigeria in July, 2004 into the business of bank charges analysis. There is an agreement between the two companies to further deepen this initiative. We are currently working with MCL solutions, Nigerian Aviation Handling Company and Chams Group. '
    },
    {
      id: 3,
      icon: 'assets/img/svg/chart.svg',
      title: 'Real Estate',
      description: 'Lasaco trading and investment (LTIL) is also into the business of real estate. We help individuals and businesses find, purchase, or rent properties that meet their needs We operate as a broker, agents, property managers, developers, or a combination of these. Currently we have some landed properties and prospecting building some smart houses in highbrow areas.'
    }
  ]
  
}
