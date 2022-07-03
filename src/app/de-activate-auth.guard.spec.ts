import { TestBed } from '@angular/core/testing';

import { DeActivateAuthGuard } from './de-activate-auth.guard';

describe('DeActivateAuthGuard', () => {
  let guard: DeActivateAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeActivateAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
