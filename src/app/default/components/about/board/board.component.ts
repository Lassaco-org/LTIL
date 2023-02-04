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
      image: 'assets/img/team/Otunba_Akin_Doherty.svg',
      name: 'Otunba Akin Doherty',
      role: 'Chairman',
      description: 'Otunba Akin Doherty is a Non-Executive Director of LASACO Assurance Plc. He has over 40 years experience in the private sector, both locally and internationally, as well as the public service in the areas of Financial Services, Computer Systems’ Implementation, Marketing and Transformation Strategy. Before Joining the Board of LASACO Assurance Plc., he has served as the Honourable Commissioner for Finance in Lagos State. Prior to that appointment, he was the pioneer Honourable Commissioner Science and Technology in Lagos State and indeed, in Nigeria following his very successful tenure in Office as the Special Adviser on Information Technology and Management Services to the Lagos State Governor. During his tenure in office, Otunba Doherty served in many capacities such as the Representative of South – Western Nigeria’s States on the Post- Mortem Sub-Committee of the Federation Accounts and Allocation Committee of Nigeria (FAAC); Member, Presidential Committee on Lagos Megacity Region; Member, Interim Implementation Committee on Lagos Metropolitan Development and Governance Project (LMDGP); Chairman, Implementation Committee on Lagos State New Contributory Pension Scheme; Chairman, Committee on Transformation of Lagos State Board of Inland Revenue now known as LIRS. Otunba Doherty has worked with various organisations including the United Bank for Africa (UBA), the Leventis Conglomerate, Mobil Nigeria, and Mobil Europe in the United Kingdom, Holland, Sweden, Denmark and Spain. He is the Managing Director and Chief Executive Officer of Manchester Consulting Limited, Chairman Manchester Construction and Services Limited and Wemimo Farms Limited. He is also a Director of Continental Broadcasting Service Limited as well as Afkar Publishing Company Limited. Otunba Akin Doherty graduated in Accounting from the Yaba College of Technology, Lagos and later qualified as a Chartered Accountant. He, thereafter, trained in the United Kingdom as a Computer Systems’ Auditor. He also holds a Master of Business Administration (MBA) Degree with specialization in Marketing Management from the Obafemi Awolowo University, Ile-Ife. Additionally, he has a Bachelor of Law Degree (LLB) from the University of Buckingham in the United Kingdom. He is a Fellow of the Institute of Chartered Accountants of Nigeria, Fellow of the Institute of Taxation of Nigeria and a Member of the Nigerian Computer Society. In recognition of Otunba Doherty’s outstanding accomplishments in the Public Service, he was honoured with many awards including the “Dr. Kwame Krumah Africa Leadership Award” in Public Service Administration in Ghana in year 2007.'
    },
    {
      id: 2,
      image: 'assets/img/team/Mr_Rilwan_Oshinusi.svg',
      name: 'Mr Rilwan Oshinusi',
      role: 'Managing Director, LTIL',
      description: ''
    },
    {
      id: 3,
      image: 'assets/img/team/Mr_Adeniyi_Rasaq_Saliu.svg',
      name: 'Mr. Adeniyi Rasaq Saliu',
      role: 'Non-Executive Director',
      description: 'Adeniyi, Rasaq Saliu is the Managing Director of Prime ARBITRAGE Limited, a reputable Business and Transaction Consulting, Advisory, Logistics & Consierge services firm in Lagos. He also sits on the boards of Boston Advisory Limited, Accentril Global Services Limited, and Commodities & Financial Services Limited. Prior to his appointment as a Non-Executive Director at Lasaco Assurance Plc, Niyi started out as a Field Officer at Industrial and General Insurance Limited, HEIRS/UBA Insurance Limited as Head of Administration and Logistics, Standard Alliance Insurance Plc as Business Manager for Ogun State before join the foremost investment banking firm, BGL Securities Limited where he rose to become the Divisional Head of Financial Institutions. At BGL Securities, he was responsible for fixed income transactions – origination and execution, business development with pension fund administrators, insurance companies, fund managers, hedge funds and other institutional clients. He later collaborated with other partners to establish Boston Advisory Services Limited, that has now grown to become one of the major investment banking firms in Lagos, he established Commodities and Financial Services Limited, a company that trades in bonds, treasury bills and other financial instruments for active investors. He also simultaneously established Accentril Global Services Limited, a company that operates Logistics and courier services before a brief stint into politics where he was elected a Local Government Chairman. Adeniyi Saliu has over 21 years combined Insurance, Investment banking, enterpreneural and political experience. He has a master’s degree in Managerial Psychology and Bachelors of Education from the University of Lagos.  He is an Associate member of the Nigerian Institute of Management, he is also a Certified Management Consultant from the Chartered Institute of Management Consultants (CIMC) Canada, he has enjoyed many local and international trainings, workshops and seminars in the course of his career.'
    },
    {
      id: 4,
      image: 'assets/img/team/Mr_Akinwale_Sofile.svg',
      name: 'Mr. Akinwale Sofile',
      role: 'Executive Directive',
      description: 'Mr. Akinwale Sofile is a graduate of Business Administration from Adekunle Ajasin University, Akungba, Ondo State as well as a graduate of Accountancy from the Yaba College of Technology.He has a Diploma in Insurance from the Chartered Insurance Institute of Nigeria. He is an experienced Finance Professional; He is also a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN) as well as an Associate Member of the Nigerian Institute of Management (NIM). With about two decades of cumulative experience in the insurance industry, he joined LASACO Assurance Plc. as the DGM (Finance).Prior to his joining LASACO Assurance Plc, he worked with WAPIC Insurance as the Financial Controller.He also has working experience with Universe Re – insurance Company Limited (Now Sterling Assurance),Modandola Investments and Niger Insurance Plc. He has relevant industry experience in areas such as Financial Reporting, Credit Control, Treasury Management, Investments Budgeting and Performance Management as well as Risk Management. He has attended several training courses, seminars and workshop locally and internationally'
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
