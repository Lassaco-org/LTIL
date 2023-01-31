import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  members = [
    {
      id: 1,
      image: 'assets/img/team/team-7.svg',
      name: 'Otunba Akin Doherty',
      role: 'Chairman'
    },
    {
      id: 2,
      image: 'assets/img/team/team-2.svg',
      name: 'Mr Rilwan Oshinusi',
      role: 'Deputy Managing Director, Corporate Service'
    },
    {
      id: 3,
      image: 'assets/img/team/team-3.svg',
      name: 'Mr Rilwan Oshinusi',
      role: 'Deputy Managing Director, Corporate Service'
    },
    {
      id: 4,
      image: 'assets/img/team/team-4.svg',
      name: 'Mr Rilwan Oshinusi',
      role: 'Deputy Managing Director, Corporate Service'
    },
    {
      id: 5,
      image: 'assets/img/team/team-5.svg',
      name: 'Mr Rilwan Oshinusi',
      role: 'Deputy Managing Director, Corporate Service'
    },
    {
      id: 6,
      image: 'assets/img/team/team-6.svg',
      name: 'Mr Rilwan Oshinusi',
      role: 'Deputy Managing Director, Corporate Service'
    },
    {
      id: 7,
      image: 'assets/img/team/Mr_Rilwan_Oshinusi.svg',
      name: 'Mr Rilwan Oshinusi',
      role: 'Deputy Managing Director, Corporate Service'
    },
    {
      id: 8,
      image: 'assets/img/team/team-8.svg',
      name: 'Mr Rilwan Oshinusi',
      role: 'Deputy Managing Director, Corporate Service'
    },
  ]
  currentMember: any;
  isMemberModal: boolean = false


  // Open member details
  openMemberDetails(member: any) {
    this.currentMember = member
    this.isMemberModal = true
  } 
  
  // Close member details
   closeMemberDetails() {
    this.isMemberModal = false
  }

}
