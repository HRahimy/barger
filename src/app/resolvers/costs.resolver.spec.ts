import { TestBed } from '@angular/core/testing';

import { CostsResolver } from './costs.resolver';

describe('CostsResolver', () => {
  let resolver: CostsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CostsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
