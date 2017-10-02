/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PromocoesService } from './promocoes.service';

describe('Service: Promocoes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromocoesService]
    });
  });

  it('should ...', inject([PromocoesService], (service: PromocoesService) => {
    expect(service).toBeTruthy();
  }));
});
