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
      role: 'Managing Director, Lasaco Trading and Investment',
      description: `He holds a Bachelor's Degree in Business and Finance from the College of North East London (1994) and a Masters Degree in Accountancy and Finance from Middlesex University, London (1997) as well as a Master of Business Administration (MBA) in Accountancy from Keller Business School, Chicago IL USA(2011). He has extensive experience in Accountancy/Finance and Insurance, having worked in the Financial sectors for over 20 years in United Kingdom(UK) and United States of America(USA) He started as a Financial Accountant at Metropolitan Housing Trust in London, where he performed Accounting and Finance functions for different segments of business. He joined T-Mobile, London and later moved to the United States of America, where he worked for BlueCross Blue Shields of Illinois(2004-2014), the largest health insurance company, in the mid-west region. He rose to the position of a Senior Financial analyst in the mergers and acquisitions department before returning to Nigeria in 2014. He joined the Board of Lasaco as Executive Director in 2016 and appointed as  Deputy Managing Director in 2018.`
    },
    {
      id: 2,
      image: 'assets/img/team/Oluwarotmi_Shonibare.jpg',
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
