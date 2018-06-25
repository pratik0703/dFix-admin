import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form;
logInRes;
model: any = {
    email: "chandanatsales.clickeat@gmail.com",
    password : "123"
  };
  constructor(private auth: AuthService,
    private cookieService: CookieService,
    private router: Router) {
      if (this.cookieService.get('userData') != ''){
        this.router.navigate(['/update-user']);
      }
    }
  login(form){
    if(form.valid){
    this.auth.login(form.value).then((data) => {
  //  this.router.navigate(['/admin']);
  this.logInRes=data;
    if(this.logInRes.success){
        this.cookieService.set('userData', JSON.stringify(this.logInRes.data));
          this.router.navigate(['/update-user']);
      //this.cookieService.set('userData', JSON.stringify(res));
    }else{
    console.log(this.logInRes)
      alert(this.logInRes.err);
    }
  }).catch(err=>{
    alert(err);
  })
  }
  }
  ngOnInit() {
    this.form=new FormGroup({
    email:new FormControl("",Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern(/[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
      ])
    ),
    password: new FormControl("",Validators.required)
  })
}
  }
