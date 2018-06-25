import { Component, OnInit,Inject } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {Http,Response} from '@angular/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import { configData} from "../../../config";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  orders;
  constructor(public http:HttpClient,private configData:configData) { }
  getOrders(){
  this.http.get(this.configData.api+'/api/getOrders').
  subscribe(
  (data)=>{
    this.orders=data[0].data;
    // console.log(data.data)
  },err=>{
    console.log("Something Went Wrong");
  }
  )
  }
  ngOnInit() {
    this.getOrders();
  }

}
