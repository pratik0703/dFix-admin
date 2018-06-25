import { Component } from '@angular/core';
import { RouterModule, Router,ActivatedRoute } from '@angular/router';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
login;
  constructor(public route: Router,private cookieService: CookieService) {
       let urlName=route.url;
       this.login=this.cookieService.get('userData');
       console.log(this.login);
      // const id: string = route.snapshot.params.id;
      // const url: string = route.snapshot.url.join('');
      // const user = route.snapshot.data.user;
     }

}
