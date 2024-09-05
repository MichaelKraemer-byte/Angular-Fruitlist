import { TestBed } from '@angular/core/testing';

import { FruitlistDataService } from './fruitlist-data.service';

describe('FruitlistDataService', () => {
  let service: FruitlistDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruitlistDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
