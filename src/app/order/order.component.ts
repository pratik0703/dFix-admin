import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { configData} from "../../config";
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  allOrders;
  orders;
  submitted;
  fromDate = new FormControl("");
  toDate=new FormControl("");
  maxDate =new Date();
  searchEX;
  newDate;
  getStartDayBetweenDate(fromDate,toDates){
  this.submitted=true;
  if(toDates ==''){
    toDates=new Date();
    this.toDate= new FormControl(new Date());
  }
    if(fromDate !='' && toDates !=''){
      this.searchEX=true;
    //  var totalExpenses=this.createExpense.length;
      this.orders=this.getFilteredArray(this.allOrders,fromDate,toDates);
      this.submitted=false;
    }
  }
  getFilteredArray(arr,startDate,endDate){
    return arr.filter(function(e1) {
                //console.log(new Date(e1.created_at));
                var mnDate = new Date(e1.created_at);
                  mnDate.setHours(0, 0, 0, 0);
                  startDate.setHours(0, 0, 0, 0);
                  endDate.setHours(0, 0, 0, 0);
                  return mnDate >= startDate && mnDate <= endDate;
              });
  }
  resetSearch(){
    this.searchEX=false;
    this.orders = this.allOrders;
    this.fromDate =new  FormControl("");
    this.toDate=new FormControl("");
  }
  constructor(public http:HttpClient,private configData:configData) { }
  getOrders(){
  this.http.get(this.configData.api+'/api/getOrders').
  subscribe(
  (data)=>{
    this.orders=data[0].data;
    this.allOrders=data[0].data;
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
