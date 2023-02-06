import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home-team',
  templateUrl: './home-team.component.html',
  styleUrls: ['./home-team.component.scss']
})
export class HomeTeamComponent {
  members = [
    {
      id: 1,
      image: 'assets/img/team/Otunba_Akin_Doherty.svg',
      name: 'Otunba Akin Doherty',
      role: 'Chairman',
      description: 'Otunba Akin Doherty is a Non-Executive Director of LASACO Assurance Plc. He has over 40 years experience in the private sector, both locally and internationally, as well as the public service in the areas of Financial Services, Computer Systems’ Implementation, Marketing and Transformation Strategy.'
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
      description: 'Adeniyi, Rasaq Saliu is the Managing Director of Prime ARBITRAGE Limited, a reputable Business and Transaction Consulting, Advisory, Logistics & Consierge services firm in Lagos.'
    },
    {
      id: 4,
      image: 'assets/img/team/Mr_Akinwale_Sofile.svg',
      name: 'Mr. Akinwale Sofile',
      role: 'Executive Director',
      description: 'Mr. Akinwale Sofile is a graduate of Business Administration from Adekunle Ajasin University, Akungba, Ondo State as well as a graduate of Accountancy from the Yaba College of Technology.'
    },
  ]
  currentMember: any;
  isMemberModal: boolean = false
  
  @ViewChild('cardContainer', { static: true }) cardContainer: ElementRef;

  constructor (private el: ElementRef) {

  }
  scrollLeft() {
    var elem = this.cardContainer.nativeElement.children[0];
    // var item = elem.getElementByClassName('item')
    console.log(elem);
    
  }

  scrollRight() {
    this.cardContainer.nativeElement;
  }

}