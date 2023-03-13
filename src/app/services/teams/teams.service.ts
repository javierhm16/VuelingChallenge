import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teams } from 'src/app/interfaces/teams.interface';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private pathTeams = '/teams';

  constructor(private http: HttpClient) { }

  /**
   * The function returns an observable of type Teams[] (an array of Teams objects) from the url /teams
   * @returns An array of teams
   */
  public getTeams(): Observable<Teams[]> {
    return this.http.get<Teams[]>(environment.url + this.pathTeams);
  }

}
