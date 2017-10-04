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

  onSubmit(form) {
    console.log(form);
  }

  constructor() {}

  ngOnInit() {}
}
