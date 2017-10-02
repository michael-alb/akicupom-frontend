import { Component, OnInit } from '@angular/core';

import { Promocao } from '../promocoes/shared/promocao';
import { PromocoesService } from '../promocoes/shared/promocoes.service';


@Component({
  selector: 'app-mais-acessados',
  templateUrl: './mais-acessados.component.html',
  styleUrls: ['./mais-acessados.component.css']
})
export class MaisAcessadosComponent implements OnInit {

  public promocoes: Promocao[] = [];
  public coverpromo: string;

  constructor(public promocoesService: PromocoesService) {
    this.coverpromo = 'src/assets/capa-promo.jpg';
   }

  ngOnInit() {
    this.promocoesService.getPromocoes()
      .subscribe(data => this.promocoes = data);
  }

}
