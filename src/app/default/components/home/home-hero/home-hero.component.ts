import { Component } from '@angular/core';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss']
})
export class HomeHeroComponent {
  bgImage = 'assets/img/home-hero-img.png'

  bgImages = [
    { id: 1, image: 'assets/img/home-hero-img.png' },
    { id: 2, image: 'assets/img/home-hero-img-2.jpg' },
    // { id: 3, image: 'linear-gradient(90deg, rgba(17, 79, 157, 0.7) 50%, rgba(255, 255, 255, 0.49) 100%), url("assets/img/hero-bg-3.png")' },
    // { id: 4, image: 'linear-gradient(90deg, rgba(17, 79, 157, 0.7) 50%, rgba(255, 255, 255, 0.49) 100%), url("assets/img/hero-bg-4.png")' },
  ]

  dataRefresher: any

  counter: number = 0

  ngOnInit(): void {
    this.refreshData()
  }



  // Fetch bg every 3 seconds
  refreshData() {
    this.dataRefresher = setInterval(() => {

      this.counter++

      // loop through images
      this.bgImages.forEach((i: any) => {
        // compare id's and assign omage to bg image
        if (this.counter === i.id) {
          this.bgImage = i.image
        }
      })

      if (this.counter > 4) {
        this.counter = 0
      }
    }, 2000)
  }
}
