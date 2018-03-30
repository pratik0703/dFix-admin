import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router,ActivatedRoute } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule}	from '@angular/material';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
//form field module
import {MatFormFieldModule} from '@angular/material/form-field';
//form input
import {MatInputModule} from '@angular/material';
//form radio button
import {MatRadioModule} from '@angular/material/radio';
//form select
import {MatSelectModule} from '@angular/material/select';
//side menu
import {MatSidenavModule} from '@angular/material/sidenav';
//slide toggle
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { ActivatedRouteSnapshot } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UpdateUserComponent } from './update-user/update-user.component';
import {AddUserComponent} from './popup/add-user/add-user.component';
import { EditUserComponent } from './popup/edit-user/edit-user.component';
import { ExpenseComponent } from './expense/expense.component';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { FilterPipe} from './filter.pipe';
import { EditExpenseComponent } from './popup/edit-expense/edit-expense.component';
import { AgmCoreModule } from '@agm/core';
import { MapViewComponent } from './map-view/map-view.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AuthService } from './services/auth.service';
import { configData } from "./../config";
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
// import { MdFormFieldModule } from '@angular/material';
// import { MdInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    LoginComponent,
    UpdateUserComponent,
    EditUserComponent,
    FilterPipe ,
    ExpenseComponent,
    EditExpenseComponent,
    MapViewComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
  FormsModule,
  HttpModule,
  AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAIHqfJmMS9bE5RlqeuiUdhDncqhJo3rO0'
    }),
  NgbModule.forRoot(),
  MatDialogModule,
  Ng2FilterPipeModule,
  MatDatepickerModule,
  MatNativeDateModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  NoopAnimationsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatRadioModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTableModule,
  MatPaginatorModule,
  RouterModule.forRoot([
    {path:'add-user',
      component:AddUserComponent},{
        path:'login',
        component:LoginComponent
      },{path:'',
      component:LoginComponent},{
        path:'update-user',
        component:UpdateUserComponent
      },{
        path:'edit-user',
        component:EditUserComponent
      },{
        path:'expense',
        component:ExpenseComponent
      },{
        path:'map-view',
        component:MapViewComponent
      },{
        path:'edit-expense',
        component:EditExpenseComponent
      }
  ]),
  ],
  providers: [AuthService,
              configData,
              CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
