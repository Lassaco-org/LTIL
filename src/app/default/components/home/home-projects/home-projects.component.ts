import { Component } from '@angular/core';

@Component({
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrls: ['./home-projects.component.scss']
})
export class HomeProjectsComponent {
  projects = [
    {
      id: 1,
      icon: 'assets/img/svg/money-4.svg',
      title: 'Financial Institutions Investment',
      description: 'Lorem ipsum dolor sit amet consectetur. Ut turpis pulvinar dis eu dui aliquet tellus lectus. Mauris tellus sapien sodales neque natoque.'
    },
    {
      id: 2,
      icon: 'assets/img/svg/money-4.svg',
      title: 'Financial Technology',
      description: 'Lorem ipsum dolor sit amet consectetur. Ut turpis pulvinar dis eu dui aliquet tellus lectus. Mauris tellus sapien sodales neque natoque.'
    },
    {
      id: 3,
      icon: 'assets/img/svg/money-4.svg',
      title: 'Corporate Gift',
      description: 'Lorem ipsum dolor sit amet consectetur. Ut turpis pulvinar dis eu dui aliquet tellus lectus. Mauris tellus sapien sodales neque natoque.'
    },
    {
      id: 4,
      icon: 'assets/img/svg/money-4.svg',
      title: 'Real Estate',
      description: 'Lorem ipsum dolor sit amet consectetur. Ut turpis pulvinar dis eu dui aliquet tellus lectus. Mauris tellus sapien sodales neque natoque.'
    },
  ]
}
