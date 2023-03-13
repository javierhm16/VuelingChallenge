import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs';
import { PlayersService } from 'src/app/services/players/players.service';
import { PagesModule } from '../pages.module';

import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  let http: HttpClient;
  const service = new PlayersService(http);

  let route: ActivatedRoute;

  const fakeActivatedRoute = {
    snapshot: { params: { id: '1' } }
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [PlayersComponent],
      providers: [PlayersService, { provide: ActivatedRoute, useValue: fakeActivatedRoute }],
      imports: [HttpClientModule, PagesModule]
    })

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    component = new PlayersComponent(service, route);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTeamPlayers function', () => {
    const spy = spyOn(component, 'getTeamPlayers').and.callFake(() => {
      return empty();
    });

    component.getTeamPlayers();

    expect(spy).toHaveBeenCalled();
  });

  xit('should call getTeamPlayer function in service', () => {
    const spy = spyOn(service, 'getTeamPlayers').and.callFake(() => {
      return empty();
    });

    component.getTeamPlayers();

    expect(spy).toHaveBeenCalled();
  })
});
