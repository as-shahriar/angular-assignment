import { TestBed } from '@angular/core/testing';

import { AllProfilesResolver } from './all-profiles.resolver';

describe('AllProfilesResolver', () => {
  let resolver: AllProfilesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AllProfilesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
