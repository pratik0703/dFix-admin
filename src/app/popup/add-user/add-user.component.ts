import { Component, OnInit,Inject } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  cancel(){
    this.dialogRef.close();
  }
  onSubmit(user,event){
    this.http.post('http://localhost:3333/api/add-user', {
        email: user.userEmail,
        firstName:user.userFirstName,
        lastName:user.userLastName,
        phone:user.userMobileNumber
      })
        .subscribe(
          res => {
            //window.location.reload();
            //if(res){
            this.dialogRef.close(res);
          //}
            //this.user=user;
          },
          err => {
            console.log("Error occured");
          }
        );
    //console.log(this.userEmail);
  }
  constructor(public http:Http,public dialogRef:MatDialogRef<AddUserComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }
//  public users=[];
  form;
  ngOnInit() {
    // this.http.get('http://localhost:3333/api/user').
    // map((response)=>response.json()).
    // subscribe(
    //   (data)=>{
    //         this.users=data.data;
    //         console.log(this.users)
    //   },err=>{
    //     console.log("Something Went Wrong");
    //   }
    // );
    this.form = new FormGroup({
      userEmail:new FormControl("",Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern(/[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
      ])
    ),
    userFirstName:new FormControl(""),
    userLastName:new FormControl(""),
    userMobileNumber:new FormControl("")
    })
  }

}
