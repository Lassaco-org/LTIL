import { Component } from '@angular/core';
import { ServiceService } from 'src/app/shared/services/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: any
  projects = [
    {
      id: 1,
      title: 'Financial Institutions Investment',
      list: [
        {
          id: 1.1,
          image: 'assets/img/projects/project-1.svg',
          description: 'Lorem ipsum dolor sit amet consectetur. Integer donec turpis sed ut scelerisque turpis erat. Scelerisque gravida sit a bibendum. Platea posuere dictum pellentesque erat egestas. Aliquet elit consectetur lectus amet interdum. Justo lacus id interdum dis adipiscing libero interdum eu in. Dolor duis tincidunt elit arcu nisl libero. Feugiat felis in velit est vitae neque blandit non. Gravida amet integer ut egestas tempor amet ac ut quam. Tellus enim vulputate amet morbi habitasse. At vehicula nunc sollicitudin blandit a eu amet mauris. Mi facilisis tellus lectus vitae sed turpis. Est turpis cras adipiscing id. Nunc viverra scelerisque proin a risus. Nisi eget egestas malesuada sed. Lorem duis augue nisi congue non nisi mauris condimentum. Lectus quisque sed suspendisse sed tellus magna tortor velit. Vivamus tempus sit dolor cursus. Elementum massa ac euismod vivamus lobortis sed orci magna massa. Nam vel nisl blandit nibh hendrerit sagittis. Ullamcorper praesent non donec posuere et nunc quisque. Etiam nec pharetra in.'
        },
        {
          id: 1.2,
          image: 'assets/img/projects/project-2.svg',
          description: 'Lorem ipsum dolor sit amet consectetur. Integer donec turpis sed ut scelerisque turpis erat. Scelerisque gravida sit a bibendum. Platea posuere dictum pellentesque erat egestas. Aliquet elit consectetur lectus amet interdum. Justo lacus id interdum dis adipiscing libero interdum eu in. Dolor duis tincidunt elit arcu nisl libero. Feugiat felis in velit est vitae neque blandit non. Gravida amet integer ut egestas tempor amet ac ut quam. Tellus enim vulputate amet morbi habitasse. At vehicula nunc sollicitudin blandit a eu amet mauris. Mi facilisis tellus lectus vitae sed turpis. Est turpis cras adipiscing id. Nunc viverra scelerisque proin a risus. Nisi eget egestas malesuada sed. Lorem duis augue nisi congue non nisi mauris condimentum. Lectus quisque sed suspendisse sed tellus magna tortor velit. Vivamus tempus sit dolor cursus. Elementum massa ac euismod vivamus lobortis sed orci magna massa. Nam vel nisl blandit nibh hendrerit sagittis. Ullamcorper praesent non donec posuere et nunc quisque. Etiam nec pharetra in.'
        }
      ]
    },
    {
      id: 2,
      title: 'Financial Technology',
      list: [
        {
          id: 2.1,
          image: 'assets/img/projects/project-3.svg',
          description: 'Lorem ipsum dolor sit amet consectetur. Integer donec turpis sed ut scelerisque turpis erat. Scelerisque gravida sit a bibendum. Platea posuere dictum pellentesque erat egestas. Aliquet elit consectetur lectus amet interdum. Justo lacus id interdum dis adipiscing libero interdum eu in. Dolor duis tincidunt elit arcu nisl libero. Feugiat felis in velit est vitae neque blandit non. Gravida amet integer ut egestas tempor amet ac ut quam. Tellus enim vulputate amet morbi habitasse. At vehicula nunc sollicitudin blandit a eu amet mauris. Mi facilisis tellus lectus vitae sed turpis. Est turpis cras adipiscing id. Nunc viverra scelerisque proin a risus. Nisi eget egestas malesuada sed. Lorem duis augue nisi congue non nisi mauris condimentum. Lectus quisque sed suspendisse sed tellus magna tortor velit. Vivamus tempus sit dolor cursus. Elementum massa ac euismod vivamus lobortis sed orci magna massa. Nam vel nisl blandit nibh hendrerit sagittis. Ullamcorper praesent non donec posuere et nunc quisque. Etiam nec pharetra in.'
        }
      ]
    },
    {
      id: 3,
      title: 'Real Estate',
      list: [
        {
          id: 3.1,
          image: 'assets/img/projects/project-4.svg',
          description: 'Lorem ipsum dolor sit amet consectetur. Integer donec turpis sed ut scelerisque turpis erat. Scelerisque gravida sit a bibendum. Platea posuere dictum pellentesque erat egestas. Aliquet elit consectetur lectus amet interdum. Justo lacus id interdum dis adipiscing libero interdum eu in. Dolor duis tincidunt elit arcu nisl libero. Feugiat felis in velit est vitae neque blandit non. Gravida amet integer ut egestas tempor amet ac ut quam. Tellus enim vulputate amet morbi habitasse. At vehicula nunc sollicitudin blandit a eu amet mauris. Mi facilisis tellus lectus vitae sed turpis. Est turpis cras adipiscing id. Nunc viverra scelerisque proin a risus. Nisi eget egestas malesuada sed. Lorem duis augue nisi congue non nisi mauris condimentum. Lectus quisque sed suspendisse sed tellus magna tortor velit. Vivamus tempus sit dolor cursus. Elementum massa ac euismod vivamus lobortis sed orci magna massa. Nam vel nisl blandit nibh hendrerit sagittis. Ullamcorper praesent non donec posuere et nunc quisque. Etiam nec pharetra in.'
        }
      ]
    },
    {
      id: 4,
      title: 'Corporate Gift',
      list: [
        {
          id: 4.1,
          image: 'assets/img/projects/project-5.svg',
          description: 'Lorem ipsum dolor sit amet consectetur. Integer donec turpis sed ut scelerisque turpis erat. Scelerisque gravida sit a bibendum. Platea posuere dictum pellentesque erat egestas. Aliquet elit consectetur lectus amet interdum. Justo lacus id interdum dis adipiscing libero interdum eu in. Dolor duis tincidunt elit arcu nisl libero. Feugiat felis in velit est vitae neque blandit non. Gravida amet integer ut egestas tempor amet ac ut quam. Tellus enim vulputate amet morbi habitasse. At vehicula nunc sollicitudin blandit a eu amet mauris. Mi facilisis tellus lectus vitae sed turpis. Est turpis cras adipiscing id. Nunc viverra scelerisque proin a risus. Nisi eget egestas malesuada sed. Lorem duis augue nisi congue non nisi mauris condimentum. Lectus quisque sed suspendisse sed tellus magna tortor velit. Vivamus tempus sit dolor cursus. Elementum massa ac euismod vivamus lobortis sed orci magna massa. Nam vel nisl blandit nibh hendrerit sagittis. Ullamcorper praesent non donec posuere et nunc quisque. Etiam nec pharetra in.'
        }
      ]
    },
  ]
  constructor(private serviceService: ServiceService) {}
  
  ngOnInit(): void {

    // Get services
    this.services = this.serviceService.getServices()
    
  }
}
