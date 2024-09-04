import { Component } from '@angular/core';
import {ApiService} from "../api.service";
import {Player} from "../../interfaces/player";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  players: Player[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPlayers().subscribe(
      (res) => {
        const fetchedPlayers = res.response[0].players;
        console.log(fetchedPlayers);
        fetchedPlayers.forEach((player: Player) => {
          console.log(player);
          this.players.push(
            player
          )
        })
      }
    )
  }
}
