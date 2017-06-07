import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UsersService {

    private urlServico: string = "http://localhost:8080/akicupom-web/rest/cupom/";

    constructor(private http: Http) {

    }

    getUser(id) {
        return this.http.get(this.urlServico + "listacupons").map(res => res.json());
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
        return this.http.post(this.urlServico, body).map(res => res.text());
    }

    updateUser(user) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let body = JSON.stringify(user);
        return this.http.put(this.urlServico, body).map(res => res.text());
    }
}
