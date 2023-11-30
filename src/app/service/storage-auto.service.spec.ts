import { TestBed } from '@angular/core/testing';

import { StorageAutoService } from './storage-auto.service';

describe('StorageAutoService', () => {
  let service: StorageAutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageAutoService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
