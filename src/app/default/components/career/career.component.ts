import { Component } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
  careers = [
    {
      id: 1,
      title: 'First',
      salary: 300000,
      type: 'Full-time'
    },
    {
      id: 2,
      title: 'Second',
      salary: 200000,
      type: 'Part-time'
    },
    {
      id: 3,
      title: 'Third',
      salary: 200000,
      type: 'Contract'
    },
    {
      id: 4,
      title: 'Fourth',
      salary: 100000,
      type: 'Internship'
    },
    {
      id: 5,
      title: 'Fifth',
      salary: 500000,
      type: 'Full-time'
    }
  ]
}
