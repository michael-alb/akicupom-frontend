import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CategoriasService {

  private url: string = "http://localhost:8080/akicupom-web/rest/akicupom/categoria/";

  constructor(private http: Http) { }

  getCategorias(){
    return this.http.get(this.url+"listar")
      .map(res => res.json());
  }

  getCategoria(id){
    return this.http.get(this.getCategoriaUrl(id))
      .map(res => res.json());
  }
/*
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
  }*/

  private getCategoriaUrl(id){
    return this.url + "/" + id;
  }
}
