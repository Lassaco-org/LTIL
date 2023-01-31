import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

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
      description: 'Corporate Gift: Lasaco trading and investment (LTIL) is also interested in printing activities in which corporate gift is an integral. We have already gotten some corporate gifts contracts for the end of the year and there are efforts to get more as we create business leads and leverage on relationships.'
    },
    {
      id: 4,
      icon: 'assets/img/svg/home.svg',
      title: 'Real Estate',
      description: 'LTIL invest in real estate and its value chain.'
    },
  ]

  constructor() { }

  // Get services
  getServices() {
    return this.services
  }
}
