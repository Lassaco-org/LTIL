import { Component } from '@angular/core';
import { ServiceService } from 'src/app/shared/services/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: any
  constructor(private serviceService: ServiceService) {}
  
  ngOnInit(): void {

    // Get services
    this.services = this.serviceService.getServices()
    
  }
}
