import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  services = [
    {
      id: 1,
      icon: 'assets/img/svg/home.svg',
      title: 'Real Estate, Property/Building & Facility Management',
      description: 'LTIL invest in real estate and its value chain.'
    },
    {
      id: 2,
      icon: 'assets/img/svg/wallet-check.svg',
      title: 'Financial Technology',
      description: 'LTIL invest, partner and collaborate with FinTechs in various niches – Payment, LendTech, InvesTech, Internet providers, Data service and cloud computing Software development etc.'
    },
    {
      id: 3,
      icon: 'assets/img/svg/chart.svg',
      title: 'Financial Institutions Investment',
      description: 'Investment in banks and other money market instruments of various forms'
    }
  ]

  constructor() { }

  // Get services
  getServices() {
    return this.services
  }
}
