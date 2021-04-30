import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user/user.service';
import { SingleUserViewComponent } from './views/single-user-view/single-user-view.component';
import { EditUserViewComponent } from './views/edit-user-view/edit-user-view.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth/auth.service';
import { UtilService } from './services/util/util.service';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserViewComponent } from './views/add-user-view/add-user-view.component';
import { UsersViewComponent } from './views/users-view/users-view.component';
import { TableLineComponent } from './components/table-line/table-line.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleUserViewComponent,
    EditUserViewComponent,
    AuthViewComponent,
    ErrorViewComponent,
    HeaderComponent,
    AddUserViewComponent,
    UsersViewComponent,
    TableLineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, AuthService, UtilService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
