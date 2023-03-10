import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a Logo of LaLiga', () => {
    const compiled = fixture.debugElement.nativeElement;

    console.log(compiled.querySelector('img')['src']);
    expect(compiled.querySelector('img')['src']).toContain('https://assets.laliga.com/assets/logos/laliga-h/laliga-h-1200x1200.png');
  })
});
