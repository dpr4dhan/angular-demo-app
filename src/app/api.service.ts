import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://v3.football.api-sports.io/players/squads?team=40';


  private httpHeaders: HttpHeaders = new HttpHeaders({
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': 'fe7592c5abd694bfdde04a68b3c52006'
  });
  constructor(private http: HttpClient) {}

  getPlayers(): Observable<any> {
    return this.http.get<any>(this.apiUrl, { headers: this.httpHeaders });
  }
}
