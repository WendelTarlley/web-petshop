/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CorreiosService } from './cep.service';

describe('Service: Correios', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CorreiosService]
    });
  });

  it('should ...', inject([CorreiosService], (service: CorreiosService) => {
    expect(service).toBeTruthy();
  }));
});
