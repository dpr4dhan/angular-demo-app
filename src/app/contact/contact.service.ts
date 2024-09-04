import { Injectable } from '@angular/core';
import {Contact} from "../../interfaces/contact";

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  save(contact: Contact) {
    let contacts:Contact[] = [];
    if(JSON.parse(localStorage.getItem('contact') ?? 'null') !== null){
      contacts = JSON.parse(localStorage.getItem('contact') ?? 'null');
    }
    contacts.push(contact)
    localStorage.setItem('contact', JSON.stringify(contacts));
  }

  get() {
    return JSON.parse(localStorage.getItem('contact') ?? 'null');
  }
}
