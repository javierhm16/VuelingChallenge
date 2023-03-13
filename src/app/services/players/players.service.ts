import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Player } from 'src/app/interfaces/players.interface';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private pathPlayers = '/players'

  constructor(private http: HttpClient) { }

  /**
   * It takes an id as a parameter, then it gets the players from the API, then it maps the response to
   * a new array of players, then it returns the new array of players
   * @param {number} id - number - the id of the team
   * @returns The players of the team with the id passed as a parameter.
   */
  public getTeamPlayers(id: number): Observable<Player[]> {
    return this.http.get<Player[]>(environment.url + this.pathPlayers).pipe(
      map(
        (res: Player[]) => {
          let name;
          let picture;
          let id_team;
          let value;
          let players: Player[] = [];
          for (let i of res) {
            if (i.id_team === id) {
              name = i.name;
              picture = i.picture;
              id_team = i.id_team;
              value = i.value;
              players.push({ name, picture, id_team, value });
            }
          }
          res = players;
          return res;
        }
      )
    );
  }
}
