import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects = [
    {
      id: 1,
      title: 'Financial Technology',
      list: [
        {
          id: 1.1,
          image: 'assets/img/projects/project-1.svg',
          description: 'Rural Telephony: Lasaco trading and investment limited I in partnership with ICSL to invest in the rural telephony space. Rural telephony is an initiative being sponsored by the NCC (Nigerian Communications Commission) to provide Cellular or GSM coverage to the outer reaches or more rural areas of the country.'
        },
        {
          id: 1.2,
          image: 'assets/img/projects/project-2.svg',
          description: 'LTIL is in partnership with MCL Solutions Limited, a finance consultancy and software development company incorporated in Nigeria in July, 2004. We specialize in providing: 1.) bank charges review services to reduce/eliminate our clients’ bank indebtedness 2.) fixed asset register management services to manage and enhance our clients’ fixed asset value.'
        },
        {
          id: 1.3,
          image: 'assets/img/projects/project-3.svg',
          description: 'We currently signed tripartite agreement with National Aviation Handling Company and MCL solutions. The contract will start in earnest for 1.) bank charges review services to reduce/eliminate our clients’ bank indebtedness and 2.) fixed asset register management services to manage and enhance our clients’ fixed asset value. In addition to the bank charges contract, we are also in talk with the he company on other business areas.'
        }
      ]
    },
    {
      id: 2,
      title: 'Corporate Gift',
      list: [
        {
          id: 2.1,
          image: 'assets/img/projects/project-5.svg',
          description: 'Lorem ipsum dolor sit amet consectetur. Integer donec turpis sed ut scelerisque turpis erat. Scelerisque gravida sit a bibendum. Platea posuere dictum pellentesque erat egestas. Aliquet elit consectetur lectus amet interdum. Justo lacus id interdum dis adipiscing libero interdum eu in. Dolor duis tincidunt elit arcu nisl libero. Feugiat felis in velit est vitae neque blandit non. Gravida amet integer ut egestas tempor amet ac ut quam. Tellus enim vulputate amet morbi habitasse. At vehicula nunc sollicitudin blandit a eu amet mauris. Mi facilisis tellus lectus vitae sed turpis. Est turpis cras adipiscing id. Nunc viverra scelerisque proin a risus. Nisi eget egestas malesuada sed. Lorem duis augue nisi congue non nisi mauris condimentum. Lectus quisque sed suspendisse sed tellus magna tortor velit. Vivamus tempus sit dolor cursus. Elementum massa ac euismod vivamus lobortis sed orci magna massa. Nam vel nisl blandit nibh hendrerit sagittis. Ullamcorper praesent non donec posuere et nunc quisque. Etiam nec pharetra in.'
        }
      ]
    },
    {
      id: 3,
      title: 'Real Estate',
      list: [
        {
          id: 3.1,
          image: 'assets/img/projects/project-4.svg',
          description: '1) Advertising at the Muritala Muhammad Airport. 2) Business consideration at the Lekki seaport. 3) Business exploration in Oil and Gas.  4) Document system management business deliberations. 5) Real Estate investment and partnership with various companies. 6) Investment in a sport and gaming business.'
        }
      ]
    },
  ]
  constructor() { }

  // Get projects
  getProjects() {
    return this.projects
  }

}
