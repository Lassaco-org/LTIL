import { Component } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent {
  members = [
    {
      id: 1,
      image: 'assets/img/team/Mr_Rilwan_Oshinusi.svg',
      name: 'Mr Rilwan Oshinusi',
      role: 'Managing Director, Lasaco Trading and Investment'
    },
    {
      id: 2,
      image: 'assets/img/team/Oluwarotmi_Shonibare.png',
      name: 'Oluwarotimi Shonibare',
      role: 'Senior Business Analyst ',
      description: 'Oluwarotimi Shonibare has cognitive experience in Human Resources, Finance, Customer Service, Relationship Management, Business Development, Procurement and Corporate Sales as he has worked majorly in the Financial Services Sector over the years. He is an Associate Member of the Chartered Institute of Administration (ACIA) with a background in Banking and Finance (Bsc.). He is also in the final stage of being an Associate Member of the Chartered Institute of Personnel Management (CIPM) amongst other trainings.'
    },
    // {
    //   id: 3,
    //   image: 'assets/img/team/team-3.svg',
    //   name: 'Mr Rilwan Oshinusi',
    //   role: 'Deputy Managing Director, Corporate Service'
    // },
    // {
    //   id: 4,
    //   image: 'assets/img/team/team-4.svg',
    //   name: 'Mr Rilwan Oshinusi',
    //   role: 'Deputy Managing Director, Corporate Service'
    // },
    // {
    //   id: 5,
    //   image: 'assets/img/team/team-5.svg',
    //   name: 'Mr Rilwan Oshinusi',
    //   role: 'Deputy Managing Director, Corporate Service'
    // },
    // {
    //   id: 6,
    //   image: 'assets/img/team/team-6.svg',
    //   name: 'Mr Rilwan Oshinusi',
    //   role: 'Deputy Managing Director, Corporate Service'
    // },
    // {
    //   id: 7,
    //   image: 'assets/img/team/team-7.svg',
    //   name: 'Mr Rilwan Oshinusi',
    //   role: 'Deputy Managing Director, Corporate Service'
    // },
    // {
    //   id: 8,
    //   image: 'assets/img/team/team-8.svg',
    //   name: 'Mr Rilwan Oshinusi',
    //   role: 'Deputy Managing Director, Corporate Service'
    // },
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
