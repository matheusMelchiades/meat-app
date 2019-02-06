import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http, RequestOptions, Headers } from "@angular/http";

import { Login } from './login.model';

import { MEAT_API } from "app/app.api";
  
@Injectable()
export class LoginService {
    constructor( private http: Http ){}

    login(login: Login) {
        const headers = new Headers()
        headers.append('Content-type', 'application/json')

        return this.http.post(`${MEAT_API}/login`, JSON.stringify(login), new RequestOptions({ headers: headers })).map(response => {
            if (response['status'] == 200)
                return response.json()
        })
    }
}