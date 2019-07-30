import { TestBed } from '@angular/core/testing';
import { MutualMatchService } from './mutual-match.service';

describe('MutualMatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MutualMatchService = TestBed.get(MutualMatchService);
    expect(service).toBeTruthy();
  });
});