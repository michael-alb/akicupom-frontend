import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class FornecedorService {

  private urlGetFornecedores: string = "http://localhost:8080/akicupom-web/rest/fornecedor/listafornecedores";

  constructor(private http: Http) { }

  getFornecedores(): Observable<Response> {
    return this.http.get(this.urlGetFornecedores).map(res => res.json())
  }
}
