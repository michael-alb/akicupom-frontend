import { TestBed, inject } from '@angular/core/testing';

import { PromocaoService } from './promocao.service';

describe('PromocaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromocaoService]
    });
  });

  it('should ...', inject([PromocaoService], (service: PromocaoService) => {
    expect(service).toBeTruthy();
  }));
});
