import { TestBed } from '@angular/core/testing';

import { ActivateChildAuthGuard } from './activate-child-auth.guard';

describe('ActivateChildAuthGuard', () => {
  let guard: ActivateChildAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivateChildAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
