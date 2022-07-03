import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { HeaderComponent } from './header/header.component';
import { ParentComponent } from './compcomm/parent/parent.component';
import { ChildComponent } from './compcomm/child/child.component';
import { EmployeeRecordComponent } from './compcomm/employee-record/employee-record.component';
import { EmployeeChildComponent } from './compcomm/employee-child/employee-child.component';
import { EmpTitlePipe } from './emp-title.pipe';
import { EmpRankOrdinalPipe } from './emp-rank-ordinal.pipe';
import { EmpFilterPipe } from './emp-filter.pipe';
import { FormsModule } from '@angular/forms';
import { TdfComponent } from './Form/tdf/tdf.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MdfComponent } from './Form/mdf/mdf.component';
import { StudentComponent } from './service/student/student.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './Pages/home/home.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { LoginComponent } from './Pages/login/login.component'
import { PostModule } from './ApiDemo/post/post.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ParentComponent,
    ChildComponent,
    EmployeeRecordComponent,
    EmployeeChildComponent,
    EmpTitlePipe,
    EmpRankOrdinalPipe,
    EmpFilterPipe,
    TdfComponent,
    MdfComponent,
    StudentComponent,    
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
