import { TestBed } from '@angular/core/testing';

import { HelperService } from './-helper.service';

describe('HelperService', () => {
  let service: HelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should create an alert with the correct message', async () => {
    const testMessage = 'Test message';
    const alert = await service.showAlert(testMessage,testMessage);
    expect(alert.message).toBe(testMessage);
  });
});
