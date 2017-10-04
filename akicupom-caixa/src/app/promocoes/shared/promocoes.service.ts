import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PromocoesService {

  private url: string = "http://localhost:8080/akicupom-web/rest/akicupom/promocao/";

  constructor(private http: Http) { }

  getPromocoes(){
    return this.http.get(this.url+"lista")
      .map(res => res.json());
  }

  getPromocao(id){
    return this.http.get(this.getPromocaoUrl(id))
      .map(res => res.json());
  }

  addPromocao(promocao){
    return this.http.post(this.url, JSON.stringify(promocao))
      .map(res => res.json());
  }

  updatePromocao(promocao){
    return this.http.put(this.getPromocaoUrl(promocao.id), JSON.stringify(promocao))
      .map(res => res.json());
  }

  deletePromocao(id){
    return this.http.delete(this.getPromocaoUrl(id))
      .map(res => res.json());
  }

  private getPromocaoUrl(id){
    return this.url + "/" + id;
  }
}


/*@Injectable()
export class PromocoesService {

    private urlServico = 'http://localhost:8080/akicupom-web/rest/akicupom/promocao/';

    constructor(private http: Http) {

    }

    getPromocao(id) {
        const url = this.urlServico + id;
        return this.http.get(url).map(res => res.json());
    }

    getPromocoes() {
        return this.http.get(this.urlServico + 'listacupons').map(res => res.json());
    }

    deletePromocao(id) {
        const url = this.urlServico + 'delete/' + id;
        return this.http.delete(url).map(res => res.text());
    }

    addPromocao(promocao) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const body = JSON.stringify(promocao);
        return this.http.post(this.urlServico + 'novo/' + promocao.nome + '/' + promocao.descricao + '/' + promocao.dataValidade , body)
        .map(res => res.json());
    }

    updatePromocao(promocao) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const body = JSON.stringify(promocao);
        return this.http.put(this.urlServico, body).map(res => res.text());
    }
}*/


