import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
import {MatDialog, MatDialogRef} from '@angular/material';
import { Router } from '@angular/router';
import { AddUserComponent } from '../popup/add-user/add-user.component';
import { EditUserComponent } from '../popup/edit-user/edit-user.component';
import { configData } from "../../config";
// import { AddUserComponent } from './add-user-modal.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  constructor(private _http: HttpClient,public configData:configData, public route: Router,public dialog:MatDialog, private modalService: NgbModal)
  {
    // let urlName=route.url;
    // console.log(route);
     }
  //   foods = [
  // {value: 'steak-0', viewValue: 'Steak'},
  // {value: 'pizza-1', viewValue: 'Pizza'},
  // {value: 'tacos-2', viewValue: 'Tacos'}
  // ];
  //  user={};

  //private url='http://192.168.43.72:3333/api/add-user';
  //delete details
  userDelete=function(users){
  this._http.post(this.configData.api+'/api/delete-user', {
       user: users
     })
       .subscribe(
         res => {
           console.log(res);
         },
         err => {
           console.log("Error occured");
         }
       );
  // console.log("here");
  // console.log(users);
  }
  editUser(users){
    let dialogRef= this.dialog.open(EditUserComponent,{
      data:users
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
      this.editNewUser=JSON.parse(result._body);
      if(this.editNewUser.success){
        this.getCurrentUser();
      }
      //this.datas=result.data;
  }
});
}
  //save user email
  save=function(email){
  this._http.post(this.configData.api+'/api/add-user', {
      email: email.userEmail
    })
      .subscribe(
        res => {
          console.log(res);
          this.getCurrentUser();
        },
        err => {
          console.log("Error occured");
        }
      );
  }
  public user=[];
  form;
  addNewUser;
  editNewUser;
  addUser(){
    let dialogRef= this.dialog.open(AddUserComponent,{
    });
    dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result.data}`);
      //this.datas=result.data;
      if(result){
      this.addNewUser=JSON.parse(result._body);
      if(this.addNewUser.status){
          this.user.push(this.addNewUser.data);
      }
    }
      //console.log(this.user);
    });
    //dialogRef.afterClosed().close('Pizza!');
    // this.AddUserComponent.show();
  }
  getCurrentUser(){
// this._http.get('http://localhost:3333/api/user').
// map((response)=>response.json()).toPromise().then(data=>{
//   console.log(data);
//   this.user=data.data.filter(
//     book => book.is_deleted == false);
//     // console.log(this.user)
// }).catch(e=>{
//   // console.log("Something Went Wrong");
// })
this._http.get(this.configData.api+'/api/user').
subscribe(
(data:any)=>{
  this.user=data.data;
  this.user=this.user.filter(
       book => book.is_deleted == false);
},err=>{
  console.log("Something Went Wrong");
}
)
// subscribe(
//   (data)=>{
//         this.user=data.data.filter(
//           book => book.is_deleted == false);
//           console.log(this.user)
//   },err=>{
//     console.log("Something Went Wrong");
//   }
// )
}
  ngOnInit(){
this.getCurrentUser();
  this.form = new FormGroup({
    userEmail:new FormControl("",Validators.compose([
      Validators.required,
      Validators.email,
      Validators.pattern(/[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
    ])
  )
  })
  }
  }
  // @Component({
  //   selector: 'app-add-user',
  //   templateUrl: '../popup/add-user/add-user.component.html'
  // })
  // export class AddUserComponent implements OnInit {
  // }
