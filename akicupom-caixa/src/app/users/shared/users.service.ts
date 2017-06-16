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
export class UsersService {

    private urlServico: string = "http://localhost:8080/akicupom-web/rest/cupom/";

    constructor(private http: Http) {

    }

    getUser(id) {
        let url = this.urlServico + id;
        return this.http.get(url).map(res => res.json());
    }

    getUsers() {
        return this.http.get(this.urlServico + "listacupons").map(res => res.json());
    }

    deleteUser(id) {
        let url = this.urlServico + 'delete/' + id;
        return this.http.delete(url).map(res => res.text());
    }
    addUser(user) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let body = JSON.stringify(user);
        return this.http.post(this.urlServico + 'novo/' + user.nome + '/' + user.descricao + '/' + user.dataValidade +
        '/' + user.capa,body)
        .map(res => res.json());
    }

    updateUser(user) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let body = JSON.stringify(user);
        return this.http.put(this.urlServico, body).map(res => res.text());
    }
}


