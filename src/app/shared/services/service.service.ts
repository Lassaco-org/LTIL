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
      description: 'Lorem ipsum dolor sit amet consectetur. Ut turpis pulvinar dis eu dui aliquet tellus lectus. Mauris tellus sapien sodales neque natoque.'
    },
    {
      id: 2,
      icon: 'assets/img/svg/wallet-check.svg',
      title: 'Financial Technology',
      description: 'Lorem ipsum dolor sit amet consectetur. Ut turpis pulvinar dis eu dui aliquet tellus lectus. Mauris tellus sapien sodales neque natoque.'
    },
    {
      id: 3,
      icon: 'assets/img/svg/chart.svg',
      title: 'Financial Institutions Investment',
      description: 'Lorem ipsum dolor sit amet consectetur. Ut turpis pulvinar dis eu dui aliquet tellus lectus. Mauris tellus sapien sodales neque natoque.'
    }
  ]

  constructor() { }

  // Get services
  getServices() {
    return this.services
  }
}
