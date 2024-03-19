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
      image: 'assets/img/team/Oluwarotmi_Shonibare.svg',
      name: 'Oluwarotimi Shonibare',
      role: 'Senior Business Analyst ',
      description: 'Oluwarotimi Shonibare has cognitive experience in Human Resources, Finance, Customer Service, Relationship Management, Business Development, Procurement and Corporate Sales as he has worked majorly in the Financial Services Sector over the years. He is an Associate Member of the Chartered Institute of Administration (ACIA) with a background in Banking and Finance (Bsc.). He is also in the final stage of being an Associate Member of the Chartered Institute of Personnel Management (CIPM) amongst other trainings.'
    },
    {
      id: 3,
      image: 'assets/img/team/Niran.png',
      name: 'Adeniran O. Adeluwoye',
      role: 'Company Secretary',
      description: 'Adeniran O. Adeluwoye is the Ag. Company Secretary of Lasaco Trading and investment Ltd, a Legal Practitioner and member of Nigerian Bar Association (NBA). He is Vast in resolution and Regulatory & Compliance practice, creative and resourceful problem solver whose approach to legal problems yields viable solutions, possesses excellent legal writing and research skills with a noteworthy experience in drafting and reviewing court processes as well as commercial agreements. He is a student member of the Institute of Chartered Secretaries and Administrators of Nigeria (ICSAN). Adeniran obtained his LL. B from the Lagos state University Ojo and his BL at the Nigeria Law School Bwari Abuja. An astute litigator and dispute resolution personified has distinguished himself in the corporate world.'
    },
    {
      id: 4,
      image: 'assets/img/team/Adedayo.png',
      name: 'Adedayo Adetokun',
      role: 'Head Strategy and Developement ',
      description:'Adedayo Adetokun is a corporate strategy and strategic human resource management professional. He has over 12 years of extensive experience in strategy development and implementation, management and organizational development, research and development, project and innovation management. He is also involved in the development of human capabilities at mid-level.  Adedayo holds MSc in organizational behavior from University of Lagos and BSc in Business Administration from Olabisi Onabanjo University. He is an associate member of chartered institute of personnel management of Nigeria, Institute of training and development of Nigeria, Institute of strategic management of Nigeria and Center for professional development, UK. He is a facilitator, data crunching enthusiast and a football aficionado'
    },
    {
      id: 5,
      image: 'assets/img/team/Sesan Oki.png',
      name: 'Sesan Oki Msc, Acca, Dcp',
      role: '',
      description:'Sesan is a consummate professional with over 25 years working experience in Nigeria and in the United Kingdom. His work experience cuts across External and internal Audit, Internal control, Compliance and strategic financial management. A chartered accountant with over 15 years post qualification, His passion for strategic financial management has made him a valuable member of any team. He is an avid writer, sports fan especially football and cricket. He is also a strategic thinker, problem solver and an advocate for environmental awareness.'
    },
    {
      id: 6,
      image: 'assets/img/team/Olayinka.png',
      name: 'Olayinka Oluseye',
      role: 'Head ICT',
      description: ''
    },
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
