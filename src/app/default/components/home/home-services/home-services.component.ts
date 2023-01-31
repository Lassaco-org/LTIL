import { Component } from '@angular/core';
import { ServiceService } from 'src/app/shared/services/service.service';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss']
})
export class HomeServicesComponent {
  services: any
  
  constructor(private serviceService: ServiceService) {}
  
  ngOnInit(): void {

    // Get services
    this.services = this.serviceService.getServices()
    
  }

}
