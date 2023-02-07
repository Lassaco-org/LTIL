import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {


  projects = [
    {
      id: 1,
      title: 'Financial Technology',
      list: [
        {
          id: 1.1,
          image: 'assets/img/projects/rural.png',
          description: 'Rural Telephony: Lasaco trading and investment limited is in partnership with ICSL to invest in the rural telephony space. The aim of rural telephony is to improve communication infrastructure and services in rural areas, which are often underserved and have limited access to technology and communication services. This project is an initiative being sponsored by the NCC (Nigerian Communications Commission) to provide Cellular or GSM coverage to the outer reaches or more rural areas of the country.'
        },
        {
          id: 1.2,
          image: 'assets/img/projects/mcl.jpg',
          description: 'LTIL is in partnership with MCL Solutions Limited, a finance consultancy and software development company incorporated in Nigeria in July, 2004 into the business of bank charges analysis. There is an agreement between the two companies to further deepen this initiative. We are currently working with MCL solutions, Nigerian Aviation Handling Company and Chams Group.'
        },
        // {
        //   id: 1.3,
        //   image: 'assets/img/projects/project-3.svg',
        //   description: 'We currently signed tripartite agreement with National Aviation Handling Company and MCL solutions. The contract will start in earnest for 1.) bank charges review services to reduce/eliminate our clients’ bank indebtedness and 2.) fixed asset register management services to manage and enhance our clients’ fixed asset value. In addition to the bank charges contract, we are also in talk with the he company on other business areas.'
        // }
      ]
    },
    {
      id: 2,
      title: 'Corporate Gift',
      list: [
        {
          id: 2.1,
          image: 'assets/img/projects/project-5.svg',
          description: 'Lasaco trading and investment (LTIL) is into printing activities focusing majorly on corporate gifts. We specialize in providing businesses and organizations with customized, branded gifts for their employees, clients, and partners. These gifts are often used for events such as festive period(s), company anniversaries, and other special occasion.'
        }
      ]
    },
    {
      id: 3,
      title: 'Real Estate',
      list: [
        {
          id: 3.1,
          image: 'assets/img/projects/real-estate.png',
          description: 'Lasaco trading and investment (LTIL) is also into the business of real estate. We help individuals and businesses find, purchase, or rent properties that meet their needs We operate as a broker, agents, property managers, developers, or a combination of these. Currently we have some landed properties and on-course to have some buildings in developing and highbrow areas.'
        }
      ]
    },
  ]
}
