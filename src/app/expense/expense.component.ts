import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule}	from '@angular/material';
import {MatInputModule} from '@angular/material';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import {Http,Response} from '@angular/http';
@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  constructor( public http:Http) { }
  fromDate = new FormControl("");
  toDate=new FormControl("");
  maxDate =new Date();
  // minDate=new Date();
form;
submitted;
createExpense;
createAllExpense;
searchEX;
getExpenseBetweenDate(fromDate,toDates){
this.submitted=true;
if(toDates ==''){
  toDates=new Date();
  this.toDate= new FormControl(new Date());
}
  if(fromDate !='' && toDates !=''){
    this.searchEX=true;
    var totalExpenses=this.createExpense.length;
    this.createExpense=this.getFilteredArray(this.createAllExpense,fromDate,toDates);
    this.submitted=false;
  }
}
//update
updateUser(expense){
console.log(expense);
}
resetSearch(){
  this.searchEX=false;
  this.createExpense = this.createAllExpense;
  console.log(this.fromDate.value);
  this.fromDate =new  FormControl("");
  this.toDate=new FormControl("");
            //$scope.searchKeyword = undefined;
            //$scope.searchMn = false;
}
getFilteredArray(arr,startDate,endDate){
  return arr.filter(function(e1) {
              //console.log(e1);
                var mnDate = new Date(e1.createdDate);
                console.log(mnDate);
                mnDate.setHours(0, 0, 0, 0);
                startDate.setHours(0, 0, 0, 0);
                endDate.setHours(0, 0, 0, 0);
                return mnDate >= startDate && mnDate <= endDate;
            });
}
  ngOnInit() {
  this.http.post('http://localhost:3333/api/get-today-expense',{"userId":"5a8da717c283f71ec44f41e2"}).
  map((response)=>response.json()).
  subscribe(
    (data)=>{
      this.createExpense=data.data;
      this.createAllExpense=  data.data;
    },err=>{
      console.log("Something Went Wrong");
    }
  )
    // this.createExpense=
    // this.createAllExpense=
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
