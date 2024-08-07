import { Component } from '@angular/core';
import {ProfileCardComponent} from "../profile-card/profile-card.component";
import {User} from "../../interfaces/user.interface";
import {CreateUserComponent} from "../create-user/create-user.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CreateUserComponent,
    ProfileCardComponent,
    NgIf
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user: User;
  constructor() {
    this.user = {
      name : '',
      email: '',
      mobile: '',
      dob: '',
      image: ''
    }
  }
  handleProfile(newUser: User){
    this.user = newUser;
  }
}
