import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

/*@Injectable()
export class UsersService {

  private url: string = "http://localhost:8080/akicupom-web/rest/cupom/";

  constructor(private http: Http) { }

  getUsers(){
    return this.http.get(this.url+"listacupons")
      .map(res => res.json());
  }

  getUser(id){
    return this.http.get(this.getUserUrl(id))
      .map(res => res.json());
  }

  addUser(user){
    return this.http.post(this.url, JSON.stringify(user))
      .map(res => res.json());
  }

  updateUser(user){
    return this.http.put(this.getUserUrl(user.id), JSON.stringify(user))
      .map(res => res.json());
  }

  deleteUser(id){
    return this.http.delete(this.getUserUrl(id))
      .map(res => res.json());
  }

  private getUserUrl(id){
    return this.url + "/" + id;
  }
}*/


@Injectable()
export class PromocoesService {

    private urlServico: string = "http://localhost:8080/akicupom-web/rest/cupom/";

    constructor(private http: Http) {

    }

    getPromocao(id) {
        let url = this.urlServico + id;
        return this.http.get(url).map(res => res.json());
    }

    getPromocoes() {
        return this.http.get(this.urlServico + "listacupons").map(res => res.json());
    }

    deletePromocao(id) {
        let url = this.urlServico + 'delete/' + id;
        return this.http.delete(url).map(res => res.text());
    }

    addPromocao(promocao) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let body = JSON.stringify(promocao);
        return this.http.post(this.urlServico + 'novo/' + promocao.nome + '/' + promocao.descricao + '/' + promocao.dataValidade ,body)
        .map(res => res.json());
    }

    updatePromocao(promocao) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let body = JSON.stringify(promocao);
        return this.http.put(this.urlServico, body).map(res => res.text());
    }
}


