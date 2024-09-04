import { Component } from '@angular/core';
import {ContactService} from "../contact/contact.service";
import {NgForOf, NgIf} from "@angular/common";
import {Contact} from "../../interfaces/contact";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  contacts: Contact[];

  constructor(private contactService: ContactService) {
    this.contacts = this.contactService.get();
  }
}
