import { Component, OnInit,Inject } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {Http,Response} from '@angular/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit {

  constructor(public http:Http,public dialogRef:MatDialogRef<EditExpenseComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }
  expense=this.data
  cancel(){
    this.dialogRef.close("");
  }
  save(expense){
    this.expense.userName=expense.userName;
    this.expense.description=expense.description;
    this.expense.expenseAmount=expense.expenseAmount;
    this.http.post('http://localhost:3333/api/update-expense', this.expense)
        .subscribe(
          res => {
            this.dialogRef.close(res);
          },
          err => {
            this.dialogRef.close("");
          }
        );
  }
form;
  ngOnInit() {
    this.form=new FormGroup({
        userName:new FormControl(this.data.user_name),
    description:new FormControl(this.data.description),
    expenseAmount:new FormControl(this.data.expense_amount)
    })
  }

}
