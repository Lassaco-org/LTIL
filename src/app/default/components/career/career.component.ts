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
      name: 'First'
    },
    {
      id: 2,
      name: 'Second'
    },
    {
      id: 3,
      name: 'Three'
    },
    {
      id: 4,
      name: 'Four'
    }
  ]
}
