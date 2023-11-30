import { TestBed } from '@angular/core/testing';

import { HelperService } from './-helper.service';

describe('HelperService', () => {
  let service: HelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelperService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
  it('Se crea una alerta con el mensaje correcto', async () => {
    const testMessage = 'Mensaje de testeo';
    const alert = await service.showAlert(testMessage,testMessage);
    expect(alert.message).toBe(testMessage);


  });

});
