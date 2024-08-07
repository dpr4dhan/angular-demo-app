import { Component, Output, EventEmitter } from '@angular/core';
import {User} from "../../interfaces/user.interface";

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  @Output() userEmitter = new EventEmitter<User>();

  createUser(){
    const newUser: User = {
      name: 'Dhiraj Pradhan',
      email : 'dpr4dhan@gmail.com',
      mobile : '9800000010',
      dob: '1997-07-22',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    };
    this.userEmitter.emit(newUser);
  }
}
