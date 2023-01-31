import { Component } from '@angular/core';
import { SeoService } from './shared/services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lasaco Trading and Investment';

  constructor(private seoService: SeoService) {
    // Update the routes Title
    this.seoService.updateTitle();
  }
}
