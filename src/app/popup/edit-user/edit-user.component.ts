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
import { configData} from "../../../config";
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  constructor(public http:Http,private configData:configData,public dialogRef:MatDialogRef<EditUserComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) {
   }
   onSubmit(user){
     user.userId=this.data._id;
     console.log(user);
     this.http.post(this.configData.api+'/api/update-user', user)
         .subscribe(
           res => {
             //window.location.reload();
             console.log(res);
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
   cancel(){
     this.dialogRef.close();
   }
form;
  ngOnInit() {
    this.form=new FormGroup({
        email:new FormControl(this.data.email,Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern(/[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
      ])
    ),
    firstName:new FormControl(this.data.first_name),
    lastName:new FormControl(this.data.last_name),
    phone:new FormControl(this.data.phone)
    })
  }

}
