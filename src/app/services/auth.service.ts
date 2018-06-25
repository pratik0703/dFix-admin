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
  goForUserDetails(token) {
    return this.http
      .get(this.configData.api + '/api/users/me',
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token}) });
  }
  login(data){
    let promise = new Promise((resolve,reject) => {
      this.fetchToken(data)
        .subscribe(res => {
          var response = res;
          this.cookieService.set('token', response.data.token);
          this.goForUserDetails(response.data.token)
          resolve(res);
        }, err => {
          reject(err);
        });
    });
    return promise;
  }

}
