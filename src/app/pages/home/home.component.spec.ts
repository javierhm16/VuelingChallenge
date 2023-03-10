import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { empty } from 'rxjs';
import { TeamsService } from 'src/app/services/teams/teams.service';
import { PagesModule } from '../pages.module';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const service = new TeamsService(null);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [TeamsService],
      imports: [HttpClientModule, PagesModule]
    })
      .compileComponents();


    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component = new HomeComponent(service, null);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTeams function', () => {
    const spy = spyOn(component, 'getTeams').and.callFake(() => {
      return empty();
    })

    component.getTeams();

    expect(spy).toHaveBeenCalled();
  });

  it('should call getTeam function in service', () => {
    const spy = spyOn(service, 'getTeams').and.callFake(() => {
      return empty();
    })

    component.getTeams();

    expect(spy).toHaveBeenCalled();
  })
});
