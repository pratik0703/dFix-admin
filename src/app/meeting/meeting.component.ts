import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AgmCoreModule } from '@agm/core';
import { configData} from "../../config";
import {MatDialog, MatDialogRef} from '@angular/material';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ViewOrdersComponent } from '../popup/view-orders/view-orders.component';
@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {
  meeting;
  constructor(public http:HttpClient,private configData:configData,private modalService: NgbModal,public dialog:MatDialog) { }
  getMeeting(){
  this.http.get(this.configData.api+'/api/getMeetings').
  subscribe(
  (data)=>{
    this.meeting=data[0].data;
    // console.log(data[0].data);
  },err=>{
    console.log("Something Went Wrong");
  }
  )
  }
  viewOrders(data){
    let dialogRef= this.dialog.open(ViewOrdersComponent,{
      data:data
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
      //this.datas=result.data;
    }
    });
  }
  ngOnInit() {
    this.getMeeting();
  }

}
