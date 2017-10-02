import { Component, OnInit } from '@angular/core';

import {UsersService} from "../users/shared/users.service";
import {Cupom} from "../users/shared/user";

@Component({
  selector: 'app-mais-acessados',
  templateUrl: './mais-acessados.component.html',
  styleUrls: ['./mais-acessados.component.css']
})
export class MaisAcessadosComponent implements OnInit {

 private users: Cupom[] = [];
  private coverpromo:string;

  constructor(private usersService: UsersService) {
    this.coverpromo = 'src/assets/capa-promo.jpg';
   }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(data => this.users = data);
  }

}
