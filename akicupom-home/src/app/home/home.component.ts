import { Component, OnInit } from '@angular/core';

import { Promocao } from '../promocoes/shared/promocao';
import { PromocoesService } from '../promocoes/shared/promocoes.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

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
