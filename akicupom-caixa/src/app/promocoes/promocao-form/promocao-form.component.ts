import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Promocao } from '../shared/promocao';
import { PromocoesService } from '../shared/promocoes.service';
import { BasicValidators } from '../../shared/basic-validators';

import { CategoriaService } from './shared/categoria.service';
import { Categoria } from './shared/Categoria';

import { FornecedorService } from './shared/fornecedor.service';
import { Fornecedor } from './shared/fornecedor';

@Component({
  selector: 'app-promocao-form',
  templateUrl: './promocao-form.component.html',
  styleUrls: ['./promocao-form.component.css'],
  providers: [CategoriaService, FornecedorService]
})
export class PromocaoFormComponent implements OnInit {

  categorias: any;
  fornecedores: any;

  constructor(private fornecedorService: FornecedorService, private categoriaService: CategoriaService, private http: Http) { }

  onSubmit(form) {
    console.log(form);

    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
    .map(res => res)
    .subscribe(dados => console.log(dados));
  }

  ngOnInit() {
    this.getCategorias();
    this.getFornecedores();
  }


  getCategorias() {
    return this.categoriaService.getCategorias().subscribe(categorias => this.categorias = categorias);
  }
  getFornecedores() {
    return this.fornecedorService.getFornecedores().subscribe(fornecedores => this.fornecedores = fornecedores);
  }

}
