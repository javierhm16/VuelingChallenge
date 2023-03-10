import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { Teams } from 'src/app/interfaces/teams.interface';
import { TeamsService } from 'src/app/services/teams/teams.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  teamName: string = '';
  teams: Teams[] = [];
  selectedProduct2: Teams;

  constructor(private teamSvc: TeamsService, private router: Router) { }

  ngOnInit(): void {
    this.getTeams();
  }

  /**
   * The getTeams() function calls the getTeams() function in the team service, which returns an
   * observable of type Team[]. The subscribe() function is called on the observable, and the res
   * parameter is assigned to the teams property of the component. The teams property is then sorted by
   * id
   */
  getTeams() {
    this.teamSvc.getTeams().subscribe(
      res => {
        this.teams = res;
        this.teams.sort(((a, b) => a.id - b.id));
      },
      err => console.error(err)
    )
  }

  /**
   * When a row is selected, the team name is set to the name of the team that was selected and the
   * router navigates to the players route with the id of the team that was selected
   * @param event - The event object that was triggered.
   */
  onRowSelect(event) {
    this.teamName = event.data.name;
    this.router.navigateByUrl(`/players/${event.data.id}`);
  }

}
