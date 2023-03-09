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

  getTeams() {
    this.teamSvc.getTeams().subscribe(
      res => {
        this.teams = res;
        this.teams.sort(((a, b) => a.id - b.id));
      },
      err => console.error(err)
    )
  }

  onRowSelect(event) {
    this.teamName = event.data.name;
    this.router.navigateByUrl(`/players/${event.data.id}`);
  }

}
