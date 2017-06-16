import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Cupom } from '../shared/user';
import { promocao } from '../shared/promocao';
import { UsersService } from '../shared/users.service';
import { BasicValidators } from '../../shared/basic-validators';
import { CategoriaService } from '../shared/categoria.service';
import { FornecedorService } from '../shared/fornecedor.service';
import { PromocaoService } from '../shared/promocao.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  providers: [CategoriaService, FornecedorService, PromocaoService]
})
export class UserFormComponent implements OnInit {

  categorias: any;
  fornecedores: any;
  form: FormGroup;
  title: string;
  user: promocao = new promocao();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private categoriasService: CategoriaService,
    private fornecedorService: FornecedorService,
    private promocaoService: PromocaoService
  ) {
    this.form = formBuilder.group({
      titulo: [],
      descricao: [],
      precoOriginal: [],
      precoComDesconto: [],
      categoriaId: [],
      fornecedorId: []
    });

  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Editar Promoção' : 'Nova Promoção';

      if (!id)
        return;

      this.usersService.getUser(id)
        .subscribe(
        user => this.user = user,
        response => {
          if (response.status == 404) {
            this.router.navigate(['Não Encontrado']);
          }
        });
    });

    this.getCategorias();
    this.getFornecedores();
  }

  save() {
    var result,
      userValue = this.form.value;

    if (userValue.id) {
      // result = this.usersService.updateUser(userValue);
    } else {
      result = this.promocaoService.savePromocao(userValue);
    }

    result.subscribe(data => this.router.navigate(['users']));
  }

  getCategorias() {
    this.categoriasService.getCategorias().subscribe(categorias => this.categorias = categorias);
  }
  getFornecedores() {
    this.fornecedorService.getFornecedores().subscribe(fornecedores => this.fornecedores = fornecedores);
  }
}
