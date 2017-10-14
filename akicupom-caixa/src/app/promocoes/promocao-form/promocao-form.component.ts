import { Http, Response } from '@angular/http';
import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Promocao } from '../shared/promocao';
import { PromocoesService } from '../shared/promocoes.service';
import { BasicValidators } from '../../shared/basic-validators';

import { CategoriaService } from './shared/categoria.service';
import { Categoria } from './shared/categoria';

import { FornecedorService } from './shared/fornecedor.service';
import { Fornecedor } from './shared/fornecedor';

@Component({
  selector: 'app-promocao-form',
  templateUrl: './promocao-form.component.html',
  styleUrls: ['./promocao-form.component.css'],
  providers: [PromocoesService, CategoriaService, FornecedorService]
})


export class PromocaoFormComponent implements OnInit {

  categorias: any;
  fornecedores: any;
  promocao: Promocao = new Promocao();
  form: FormGroup;

  private url: string = 'http://localhost:8080/akicupom-web/rest/novo/';

  constructor(private http: Http,
    private formBuilder: FormBuilder,
    private promocoesService: PromocoesService,
    private categoriaService: CategoriaService,
    private fornecedorService: FornecedorService
  ) {

  this.form = formBuilder.group({
    nome: [],
    descricao: [],
    valor_promocao: [],
    dataValidade: [],
    capa: [],
    status: [],
    categoria: [],
    fornecedor: []
    });
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

  save() {
    prompt('Ola! Botao clicado!');
    const promoValue = this.form.value;
    this.promocoesService.addPromocao(promoValue);
  }

}
