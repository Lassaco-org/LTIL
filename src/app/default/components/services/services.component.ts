import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      id: 1,
      icon: 'assets/img/svg/chart.svg',
      title: 'Financial Institutions Investment',
      description: 'Investment in banks and other money market instruments of various forms'
    },
    {
      id: 2,
      icon: 'assets/img/svg/wallet-check.svg',
      title: 'Financial Technology',
      description: 'LTIL invest, partner and collaborate with FinTech companies in various niches – Payment, LendTech, InvesTech, Internet providers, Data service and cloud computing Software development etc.'
    },
    {
      id: 3,
      icon: 'assets/img/svg/money-4.svg',
      title: 'Corporate Gift',
      description: 'Lasaco trading and investment (LTIL) is into printing activities focusing majorly on corporate gifts. We specialize in providing businesses and organizations with customized, branded gifts for their employees, clients, and partners. These gifts are often used for events such as festive period/season, company anniversaries, and other special occasions'
    },
    {
      id: 4,
      icon: 'assets/img/svg/home.svg',
      title: 'Real Estate',
      description: 'Lasaco trading and investment (LTIL) is also into the business of real estate. We help individuals and businesses find, purchase, or rent properties that meet their needs We operate as a broker, agent, property manager, developer, or a combination of these. Currently we have some landed properties and on-course to have some buildings in developing and highbrow areas.'
    },
  ]
}
