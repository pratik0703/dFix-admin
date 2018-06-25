import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule}	from '@angular/material';
import {MatInputModule} from '@angular/material';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import {Http,Response} from '@angular/http';
import { EditExpenseComponent } from '../popup/edit-expense/edit-expense.component';
import {MatDialog, MatDialogRef} from '@angular/material';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatIconModule} from '@angular/material/icon';
import { configData } from "../../config";
import {ImageZoomModule} from 'angular2-image-zoom';
@Component({
  selector: 'app-start-stop-day',
  templateUrl: './start-stop-day.component.html',
  styleUrls: ['./start-stop-day.component.css']
})
export class StartStopDayComponent implements OnInit {
  fromDate = new FormControl("");
  toDate=new FormControl("");
  maxDate =new Date();
  summaryDetails;
  submitted;
  searchEX;
  newDate;
  allSummaryDetails;
  checkDate(date){
    return new Date(date);
  }
  getStartDayBetweenDate(fromDate,toDates){
    console.log(toDates);
  this.submitted=true;
  if(toDates ==''){
    toDates=new Date();
    console.log("test")
    this.toDate= new FormControl(new Date());
  }
    if(fromDate !='' && toDates !=''){
      this.searchEX=true;
    //  var totalExpenses=this.createExpense.length;
      this.summaryDetails=this.getFilteredArray(this.allSummaryDetails,fromDate,toDates);
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
    this.summaryDetails = this.allSummaryDetails;
    this.fromDate =new  FormControl("");
    this.toDate=new FormControl("");
  }
  constructor(
    public http:Http,
    private configData: configData
  ) {
    this.newDate=new Date();
   }
   p: number = 1;
  getStartStopDetails(){
  this.http.get(this.configData.api+'/api/get-day-summary').
  map((response)=>response.json()).
  subscribe(
  (data)=>{
    this.summaryDetails=data.data;
    this.allSummaryDetails=data.data;
  },err=>{
    console.log("Something Went Wrong");
  }
  )
  }
  resetEndTime(day){
    this.http.post(this.configData.api+'/api/resetEndTime',day).
    map((res)=>res.json()).
    subscribe((data)=>{
      console.log(data.data);
    },err=>{
      console.log("Something Went Wrong");
    })
    // this.http.post()
  }
  ngOnInit() {
    this.getStartStopDetails();
  }

}
