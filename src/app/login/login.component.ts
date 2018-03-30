import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService,private cookieService: CookieService) { }
  login(form){
    if(form.valid){
    this.auth.login(form.value).then((res) => {
  //  this.router.navigate(['/admin']);
    if(res.success){
      this.cookieService.set('userData', JSON.stringify(res));
    }else{
      alert(res.data);
    }
  }).catch(err=>{
    console.log(err)
    alert(err);
  })
  }
  }
  login
  ngOnInit() {
    this.form=new FormGroup({
    email:new FormControl("test@test.com",Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern(/[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
      ])
    ),
    password: new FormControl("test",Validators.required)
  })
}
  }

}
