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

  getTeams() {
    return this.http.get<Teams[]>(`${url}/teams`);
  }

}
