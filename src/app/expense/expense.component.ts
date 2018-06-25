import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule}	from '@angular/material';
import {MatInputModule} from '@angular/material';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {Http,Response} from '@angular/http';
import { EditExpenseComponent } from '../popup/edit-expense/edit-expense.component';
import {MatDialog, MatDialogRef} from '@angular/material';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatIconModule} from '@angular/material/icon';
import { configData } from "../../config";
@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  constructor(public http:Http,private modalService: NgbModal,public dialog:MatDialog,private configData:configData) { }
  fromDate = new FormControl("");
  toDate=new FormControl("");
  maxDate =new Date();
   p: number = 1;
  // minDate=new Date();
form;
submitted;
createExpense;
createAllExpense;
searchEX;
updatedExpense;
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
resetSearch(){
  this.searchEX=false;
  this.createExpense = this.createAllExpense;
  //console.log(this.fromDate.value);
  this.fromDate =new  FormControl("");
  this.toDate=new FormControl("");
            //$scope.searchKeyword = undefined;
            //$scope.searchMn = false;
}
//delete expense
deleteExpense(expense,index){
expense.expenseId=expense._id;
    this.http.post(this.configData.api+'/api/delete-expense',expense).
    map((response)=>response.json()).
    subscribe(
    (data)=>{
      this.createExpense.splice(this.createExpense.indexOf(expense), 1);
    },err=>{
      console.log("Something Went Wrong");
    }
    )
}
getFilteredArray(arr,startDate,endDate){
  return arr.filter(function(e1) {
              //console.log(e1);
                var mnDate = new Date(e1.created_at);
                mnDate.setHours(0, 0, 0, 0);
                startDate.setHours(0, 0, 0, 0);
                endDate.setHours(0, 0, 0, 0);
                return mnDate >= startDate && mnDate <= endDate;
            });
}
//edit expense
editExpense(expense){
console.log(expense)
let dialogRef= this.dialog.open(EditExpenseComponent,{
  data:expense
});
dialogRef.afterClosed().subscribe(result => {
  if(result){
  this.updatedExpense=JSON.parse(result._body);
  if(this.updatedExpense.success){
    this.getCurrentExpense();
  }
  //this.datas=result.data;
}
});
}
getCurrentExpense(){
this.http.get(this.configData.api+'/api/getExpense').
map((response)=>response.json()).
subscribe(
(data)=>{
  this.createExpense=data.data;
  this.createAllExpense=  data.data;
},err=>{
  console.log("Something Went Wrong");
}
)
}
  ngOnInit() {
this.getCurrentExpense();
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
