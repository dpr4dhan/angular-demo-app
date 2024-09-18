import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from "@angular/forms";
import {UnsplashService} from "../services/unsplash.service";  // Import the service from your library

@Component({
  standalone: true,  // Standalone component
  selector: 'app-image-search',
  imports: [CommonModule, HttpClientModule, FormsModule],  // Import required Angular modules
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent {
  searchTerm: string = '';
  images: any[] = [];

  constructor(private unsplashService: UnsplashService) {}

  searchImages() {
    if (this.searchTerm) {
      this.unsplashService.searchImages(this.searchTerm).subscribe((response: any) => {
        this.images = response.results;
      });
    }
  }
}
