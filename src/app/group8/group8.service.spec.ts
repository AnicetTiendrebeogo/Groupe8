import { TestBed } from '@angular/core/testing';

import { Group8Service } from './group8.service';

describe('Group8Service', () => {
  let service: Group8Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Group8Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
