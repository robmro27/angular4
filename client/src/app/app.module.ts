import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRouterModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/user-detail/user.detail.component';
import { UserService } from './services/user/user.service';
import { UserFormComponent } from './components/user-forms/user-form.component';
import { UserSearchComponent } from './components/user-search/user-search.component';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    UserDetailComponent,
    UserFormComponent,
    UserSearchComponent,
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2GoogleChartsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
