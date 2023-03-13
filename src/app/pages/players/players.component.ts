import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/interfaces/players.interface';
import { PlayersService } from 'src/app/services/players/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  public playerName: string;
  public playerPicture: string;
  public playerValue: number;
  public club: string;
  public players: Player[] = [];
  public displayResponsive: boolean = false;

  constructor(private playerSvc: PlayersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTeamPlayers();
  }

  /**
   * It returns the value of the id parameter in the URL as a number
   * @returns The id parameter from the route.
   */
  private get idParam(): Number {
    return Number(this.activatedRoute.snapshot.params['id']);
  }

  /**
   * The function gets the players for a team by calling the getTeamPlayers() function in the player
   * service
   */
  public getTeamPlayers(): void {
    this.playerSvc.getTeamPlayers(Number(this.idParam)).subscribe(
      res => {
        this.players = res;
      },
      err => console.error(err)
    )
  }


  /**
   * The function is called when a row is selected. It sets the playerName, playerPicture and
   * playerValue variables to the values of the selected row. It also sets the displayResponsive
   * variable to true, which will display the responsive dialog
   * @param event - The event object
   */
  public onRowSelect(event): void {
    this.playerName = event.data.name;
    this.playerPicture = event.data.picture;
    this.playerValue = event.data.value;
    this.displayResponsive = true;
  }

}
