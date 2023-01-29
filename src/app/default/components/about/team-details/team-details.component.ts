import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent {
  @Input() member: any
  @Output() isMemberModal: EventEmitter<any> = new EventEmitter() 


  // Close Modal
  closeModal() {
    this.isMemberModal.emit()
  }
}
