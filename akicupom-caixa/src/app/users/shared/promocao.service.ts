import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PromocaoService {

  private urlNovaPromocao: string = "http://localhost:8080/akicupom-web/rest/promocao/novo/";

  constructor(private http: Http) { }


  savePromocao(promocao) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let body = JSON.stringify(promocao);
    console.log(body);
    return this.http.post(this.urlNovaPromocao, body).map(res => res.json());
  }
}
