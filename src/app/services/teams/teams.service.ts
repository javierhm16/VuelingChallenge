import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teams } from 'src/app/interfaces/teams.interface';
import { environment } from 'src/environments/environment.prod';

const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  /**
   * The function returns an observable of type Teams[] (an array of Teams objects) from the url /teams
   * @returns An array of teams
   */
  getTeams() {
    return this.http.get<Teams[]>(`${url}/teams`);
  }

}
