import { Component } from '@angular/core';
import {ContactService} from "./contact.service";
import {FormsModule, NgForm} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name = '';
  address = '';
  phone = '';

  constructor(private contactService: ContactService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.contactService.save({
        name: this.name,
        address: this.address,
        phone: this.phone,
      });

      form.resetForm();
    }
  }
}
