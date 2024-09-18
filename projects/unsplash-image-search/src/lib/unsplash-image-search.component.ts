import { Component } from '@angular/core';
import {ImageSearchComponent} from "./image-search/image-search.component";

@Component({
  selector: 'lib-unsplash-image-search',
  standalone: true,
  imports: [
    ImageSearchComponent
  ],
  template: `
    <app-image-search></app-image-search>
  `,
  styles: ``
})
export class UnsplashImageSearchComponent {

}
