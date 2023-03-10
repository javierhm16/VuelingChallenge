import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PlayersService } from './players.service';

describe('PlayersService', () => {
  let service: PlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(PlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
