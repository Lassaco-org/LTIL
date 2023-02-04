import { Component } from '@angular/core';


@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss']
})
export class HomeServicesComponent {
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
      description: 'LTIL invest, partner and collaborate with FinTechs in various niches – Payment, LendTech, InvesTech, Internet providers, Data service and cloud computing Software development etc.'
    },
    {
      id: 3,
      icon: 'assets/img/svg/money-4.svg',
      title: 'Corporate Gift',
      description: 'Lasaco Trading and Investment specializes in printing and providing custom branded gifts for corporate clients. They offer businesses and organizations a range of personalized gifts for their employees, partners and clients, perfect for special events and occasions'
      // description: 'Lasaco trading and investment (LTIL) is into printing activities focusing majorly on corporate gifts. We specialize in providing businesses and organizations with customized, branded gifts for their employees, clients, and partners. These gifts are often used for events such as holidays, company anniversaries, and other special occasions'
    },
    {
      id: 4,
      icon: 'assets/img/svg/home.svg',
      title: 'Real Estate',
      description: 'Lasaco Trading and Investment is a company offering real estate services, including property search, purchase and rental. They work as brokers, agents, property managers, and developers and have landed properties and plans for smart homes in upscale areas.'
      // description: 'Lasaco trading and investment (LTIL) is also into the business of real estate. We help individuals and businesses find, purchase, or rent properties that meet their needs We operate as a broker, agents, property managers, developers, or a combination of these. Currently we have some landed properties and prospecting building some smart houses in highbrow areas.'
    },
  ]
  
  constructor() {}
  
  ngOnInit(): void {
    
  }

}
