import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { CookieService } from 'ngx-cookie-service';
import { configData } from "../../config";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
    private cookieService: CookieService,
    private configData: configData) { }

    fetchToken(data):Observable<any>{
    console.log("this.configData.api ", this.configData.api);
    return this.http.post(
      this.configData.api + '/api/admin',
      data
    );
  }
  login(data){
    let promise = new Promise((resolve,reject) => {
      this.fetchToken(data)
        .subscribe(res => {
          var response = res;
          console.log("response ", response);
          // if (response.token != undefined) { response.token}
          this.cookieService.set('token', response.token);
          resolve(res);
        }, err => {
          reject(err);
        });
    });
    return promise;
  }

}
