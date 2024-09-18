import { Component } from '@angular/core';
import {UnsplashImageSearchComponent, UnsplashService} from "unsplash-image-search";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [UnsplashImageSearchComponent, NgForOf, NgIf],
  providers: [UnsplashService],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

}
