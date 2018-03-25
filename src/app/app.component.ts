import { Component } from '@angular/core';
import { RouterModule, Router,ActivatedRoute } from '@angular/router';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public route: Router) {
    console.log(route)
       let urlName=route.url;
       console.log(urlName);

      // const id: string = route.snapshot.params.id;
      // const url: string = route.snapshot.url.join('');
      // const user = route.snapshot.data.user;
     }

}
