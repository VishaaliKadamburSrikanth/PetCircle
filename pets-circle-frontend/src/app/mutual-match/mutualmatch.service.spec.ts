/*
 * Created by
 * Karan Gill (B00757467)
 * CODE REF AS WELL AS IDEA: TEAMMATES
 */

import { TestBed } from '@angular/core/testing';

import { MutualMatchService } from './mutualmatch.service';

describe('MutualMatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MutualMatchService = TestBed.get(MutualMatchService);
    expect(service).toBeTruthy();
  });
});
