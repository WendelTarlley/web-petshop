/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CaixaDialogoGenericaService } from './caixa-dialogo-generica.service';

describe('Service: CaixaDialogoGenerica', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaixaDialogoGenericaService]
    });
  });

  it('should ...', inject([CaixaDialogoGenericaService], (service: CaixaDialogoGenericaService) => {
    expect(service).toBeTruthy();
  }));
});
