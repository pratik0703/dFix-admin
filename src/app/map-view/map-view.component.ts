import { Component, OnInit,Input } from '@angular/core';
import { AgmCoreModule,MapsAPILoader } from '@agm/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {Http,Response} from '@angular/http';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { configData } from "../../config";
declare var jQuery:any;
declare var $ :any;
declare var google: any;
@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  @Input() zoom: number = 13;
   @Input() scrollwheel: boolean = true;

  constructor(public agm:AgmCoreModule,private configData:configData,public _http:HttpClient) { }
  public user:any=[];
  public mapArray:any=[];
  form;
  date;
  req={
    _id:'',
    date:''
  };
  test(users,selectedDate){
    this.req._id=users._id;
    this.req.date=users.created_at;

    console.log(selectedDate);
    // return false;
    this._http.post(this.configData.api+'/api/getLocation',this.req).
    subscribe(
      (data:any)=>{
        // console.log(data);
        this.mapArray=data.data;
        // console.log(this.mapArray);
      },err=>{

      }
    )
  }
  ngOnInit() {
    this._http.get(this.configData.api+'/api/user').
    subscribe(
    (data:any)=>{
      // console.log(data);
      this.user=data.data;
      this.user=this.user.filter(
           book => book.is_deleted == false);
    },err=>{
      console.log("Something Went Wrong");
    })

    this.form=new FormGroup({
  //       userName:new FormControl(this.data.user_name),
  //   description:new FormControl(this.data.description),
  //   expenseAmount:new FormControl(this.data.expense_amount)
  });

    this.mapArray=[{
     "_id" : "5aba8c959c9847123c453e91",
     "user_id" : "5a8da717c283f71ec44f41e2",
     "user_name":"Arpan",
     "location" : [
         {
             "latitude" : 23.0037732,
             "longitude" : 72.5620563
         },
         {
             "latitude" : 23.030357,
             "longitude" : 72.517845
         },
         {
             "latitude" : 23.0396,
             "longitude" : 72.566
         },
         {
             "latitude" : 23.033863,
             "longitude" : 72.585022
         },
         {
             "latitude" : 23.006489,
             "longitude" : 72.5621431
         },
         {
             "latitude" : 23.006489,
             "longitude" : 72.5621431
         },
         {
             "latitude" : 23.006489,
             "longitude" : 72.5621431
         },
         {
             "latitude" : 23.007950,
             "longitude" : 72.553757
         },
         {
             "latitude" : 23.006489,
             "longitude" : 72.5621431
         },
         {
             "latitude" : 23.006489,
             "longitude" : 72.5621431
         },
         {
             "latitude" : 23.006489,
             "longitude" : 72.5621431
         },
         {
             "latitude" : 23.006489,
             "longitude" : 72.5621431
         },
         {
             "latitude" : 23.006489,
             "longitude" : 72.5621431
         },
         {
             "latitude" : 23.006489,
             "longitude" : 72.5621431
         },
         {
             "latitude" : 23.006489,
             "longitude" : 72.5621431
         },
         {
             "latitude" : 23.006489,
             "longitude" : 72.5621431
         },
         {
             "latitude" : 23.006489,
             "longitude" : 72.5621431
         },
         {
             "latitude" : 23.006489,
             "longitude" : 72.5621431
         }
     ],
     "current_location" : {
         "latitude" : 23.006489,
         "longitude" : 72.5621431
     },
     "created_at" : "2018-03-27T18:25:40.658Z",
     "updated_at" : "2018-03-27T18:25:40.658Z",
     "__v" : 0
  }];
  }

  // lat: number = 23.013054;
  // lng: number = 72.562515;


}
