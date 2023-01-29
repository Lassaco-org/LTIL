import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-career-details',
  templateUrl: './career-details.component.html',
  styleUrls: ['./career-details.component.scss']
})
export class CareerDetailsComponent {
  @Input() career: any
  @Output() isCareerModal: EventEmitter<any> = new EventEmitter() 


  // Close Modal
  closeModal() {
    this.isCareerModal.emit()
  }
}
