import { Component, Input } from '@angular/core';
import {User} from "../../interfaces/user.interface";
import {DatePipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [UpperCasePipe, DatePipe],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
  @Input() user: User;
  constructor() {
    this.user = {
      name: '',
      email: '',
      mobile: '',
      dob: '',
      image: ''
    };
  }
}
