import { Component, OnInit,Input } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import {Http,Response} from '@angular/http';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { configData} from "../../config";
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
    @Input() zoom: number = 13;
   @Input() scrollwheel: boolean = true;

  constructor(public agm:AgmCoreModule,public _http:HttpClient,private configData:configData) { }
  mapArray;
  private convertStringToNumber(value: string): number {
        return +value;
    }
  ngOnInit() {
    this._http.get(this.configData.api+'/api/getCurrentLocation').
    map((response)=>response).
    subscribe(
    (data:any)=>{
      this.mapArray=data.data;
      // console.log(this.mapArray[0].current_location);
    },err=>{
      console.log(err);
    }
    )
  //   this.mapArray=[{
  //    "_id" : "5aba8c959c9847123c453e91",
  //    "user_id" : "5a8da717c283f71ec44f41e2",
  //    "user_name":"Arpan",
  //    "location" : [
  //        {
  //            "latitude" : 23.0037732,
  //            "longitude" : 72.5620563
  //        },
  //        {
  //            "latitude" : 23.0037732,
  //            "longitude" : 72.5620563
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        }
  //    ],
  //    "current_location" : {
  //        "latitude" : 23.006489,
  //        "longitude" : 72.5621431
  //    },
  //    "created_at" : "2018-03-27T18:25:40.658Z",
  //    "updated_at" : "2018-03-27T18:25:40.658Z",
  //    "__v" : 0
  // },{
  //    "_id" : "5aba8c959c9847123c453e91",
  //    "user_id" : "5a8da717c283f71ec44f41e2",
  //    "user_name":"Pratik",
  //    "location" : [
  //        {
  //            "latitude" : 23.0037732,
  //            "longitude" : 72.5620563
  //        },
  //        {
  //            "latitude" : 23.0037732,
  //            "longitude" : 72.5620563
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        },
  //        {
  //            "latitude" : 23.006489,
  //            "longitude" : 72.5621431
  //        }
  //    ],
  //    "current_location" : {
  //        "latitude" : 23.013054,
  //        "longitude" : 72.562515
  //    },
  //    "created_at" : "2018-03-27T18:25:40.658Z",
  //    "updated_at" : "2018-03-27T18:25:40.658Z",
  //    "__v" : 0
  // },{"user_name":"Test","current_location" : {
  //     "latitude" : 23.021582,
  //     "longitude" : 72.668335
  // }},{"user_name":"Test1","current_location" : {
  //     "latitude" : 23.044628,
  //     "longitude" : 72.667877
  // }}];
  }

  // lat: number = 23.013054;
  // lng: number = 72.562515;

}
