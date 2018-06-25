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
import {AuthGuardService as AuthGuard} from './services/auth-guard.service'

import { configData } from "./../config";
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {ImageZoomModule} from 'angular2-image-zoom';
import { StartStopDayComponent } from './start-stop-day/start-stop-day.component';
import { MeetingComponent } from './meeting/meeting.component';
import { OrderComponent } from './order/order.component';
import { LocationComponent } from './location/location.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Xhttpinterceptor } from './xhttp-interceptor';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { MainComponent } from './Main/Main.component';
import { ViewOrdersComponent } from './popup/view-orders/view-orders.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
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
    MapViewComponent,
    StartStopDayComponent,
    MeetingComponent,
    OrderComponent,
    LocationComponent,
    MainComponent,
    ViewOrdersComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    NgxPaginationModule,
    ImageZoomModule,
    HttpClientModule,
    MatIconModule,
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
    {path:'',
    component:LoginComponent},
    {path:'',
      component:MainComponent,canActivate: [AuthGuard],children:[
    {path:'add-user',
      component:AddUserComponent},{
        path:'login',
        component:LoginComponent
      },{
        path:'update-user',
        component:UpdateUserComponent,canActivate: [AuthGuard]
      },{
        path:'edit-user',
        component:EditUserComponent,canActivate: [AuthGuard]
      },{
        path:'expense',
        component:ExpenseComponent,canActivate: [AuthGuard]
      },{
        path:'startStopDay',
        component:StartStopDayComponent,canActivate: [AuthGuard]
      },{
        path:'map-view',
        component:MapViewComponent,canActivate: [AuthGuard]
      },{
        path:'edit-expense',
        component:EditExpenseComponent,canActivate: [AuthGuard]
      },{
        path:'meeting',
        component:MeetingComponent,canActivate: [AuthGuard]
      },{
        path:'order',
        component:OrderComponent,canActivate: [AuthGuard]
      },{
        path:'location',
        component:LocationComponent,canActivate: [AuthGuard]
      },{
        path:'view-orders',
        component:ViewOrdersComponent,canActivate: [AuthGuard]
      }
    ]}
  ]),
  ],
  providers: [AuthService,
              configData,
              AuthGuard,
              {
                provide: HTTP_INTERCEPTORS,
                useClass: Xhttpinterceptor,
                multi: true
              },
              CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
