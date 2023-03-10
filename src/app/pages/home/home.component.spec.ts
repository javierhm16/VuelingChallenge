import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { empty } from 'rxjs';
import { PagesModule } from '../pages.module';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [],
      imports: [HttpClientModule, PagesModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTeams function', () => {
    const spy = spyOn(component, 'getTeams').and.callFake(()=> {
      return empty();
    })

    component.getTeams();

    expect(spy).toHaveBeenCalled();
  })
});
