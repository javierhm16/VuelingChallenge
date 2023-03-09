import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, pipe } from 'rxjs';
import { Player } from 'src/app/interfaces/players.interface';
import { PlayersService } from 'src/app/services/players/players.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  playerName: string;
  playerPicture: string;
  playerValue: number;
  club: string;
  players: Player[] = [];
  displayResponsive: boolean = false;

  constructor(private playerSvc: PlayersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTeamPlayers();
  }

  getTeamPlayers() {
    const { id } = this.activatedRoute.snapshot.params;
    this.playerSvc.getTeamPlayers(Number(id)).subscribe(
      res => {
        this.players = res;
        console.log(res);
      },
      err => console.error(err)
    )
  }


  onRowSelect(event) {
    this.playerName = event.data.name;
    this.playerPicture = event.data.picture;
    this.playerValue = event.data.value;
    this.displayResponsive = true;
  }

}
