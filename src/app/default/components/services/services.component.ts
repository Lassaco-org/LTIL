import { Component } from '@angular/core';
import { ProjectService } from 'src/app/shared/services/project.service';
import { ServiceService } from 'src/app/shared/services/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: any
  projects: any
  constructor(private serviceService: ServiceService, private projectService: ProjectService) {}
  
  ngOnInit(): void {

    // Get services
    this.services = this.serviceService.getServices()

    // Get projects
    this.projects = this.projectService.getProjects()
    
  }
}
