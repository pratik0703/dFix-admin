import { Component, OnInit } from '@angular/core';
import { RouterModule, Router,ActivatedRoute } from '@angular/router';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  login;
    constructor(public route: Router,private cookieService: CookieService) {
         let urlName=route.url;
         this.login=this.cookieService.get('userData');
         console.log(this.login);
        // const id: string = route.snapshot.params.id;
        // const url: string = route.snapshot.url.join('');
        // const user = route.snapshot.data.user;
       }
       logOut() {
           this.cookieService.set('userData', '');
           setTimeout(() => {
             this.route.navigate(['']);
           },1000);
           return false;
         }
  ngOnInit() {
  }

}
