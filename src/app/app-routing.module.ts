import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { AddUserViewComponent } from './views/add-user-view/add-user-view.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { EditUserViewComponent } from './views/edit-user-view/edit-user-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { SingleUserViewComponent } from './views/single-user-view/single-user-view.component';
import { UsersViewComponent } from './views/users-view/users-view.component';

const routes: Routes = [

 {path: 'auth', component: AuthViewComponent},
 {path: '', canActivate: [AuthGuardService], component: UsersViewComponent},
 {path: 'users', canActivate: [AuthGuardService], component: UsersViewComponent},
 {path: 'user/add', canActivate: [AuthGuardService], component: AddUserViewComponent},
 {path: 'user/edit/:id', canActivate: [AuthGuardService], component: EditUserViewComponent},
 {path: 'user/:id', canActivate: [AuthGuardService], component: SingleUserViewComponent},
 {path: 'not-found', component: ErrorViewComponent},
 {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
