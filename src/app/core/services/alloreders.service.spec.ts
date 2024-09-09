import { TestBed } from '@angular/core/testing';

import { AlloredersService } from './alloreders.service';

describe('AlloredersService', () => {
  let service: AlloredersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlloredersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
