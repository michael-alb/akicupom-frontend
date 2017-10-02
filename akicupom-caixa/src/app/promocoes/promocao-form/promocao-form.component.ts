import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Promocao } from '../shared/promocao';
import { PromocoesService } from '../shared/promocoes.service';
import { BasicValidators } from '../../shared/basic-validators';

@Component({
  selector: 'app-promocao-form',
  templateUrl: './promocao-form.component.html',
  styleUrls: ['./promocao-form.component.css']
})
export class PromocaoFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  promocao: Promocao = new Promocao();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private promocoesService: PromocoesService
  ) {
    this.form = formBuilder.group({
      nome: [],
      descricao: [],
      datavalidade: [],
      categoria: [],
      fornecedor: [],
      valor: [],
      status: [],
      capa: []

    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Editar Cupom' : 'Novo Cupom';

      if (!id)
        return;

      this.promocoesService.getPromocao(id)
        .subscribe(
          promocao => this.promocao = promocao,
          response => {
            if (response.status == 404) {
              this.router.navigate(['Não Encontrado']);
            }
          });
    });
  }

  addPromocoes() {
    var result,
        promocaoValue = this.form.value;

    if (promocaoValue.id){
      result = this.promocoesService.updatePromocao(promocaoValue);
    } else {
      result = this.promocoesService.addPromocao(promocaoValue);
    }

    result.subscribe(data => this.router.navigate(['promocoes']));
  }
}
