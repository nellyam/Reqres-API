import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {


  authForm: FormGroup;
  errMessage: string;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void{
    this._initForm();
  }

  /**
   * Inits the form
   */
   _initForm() {
    this.authForm = this.formBuilder.group({
      'email': ['', [Validators.email, Validators.required]],
      'password': ['',  Validators.required]
    });
   }

  onSubmitSignIn() {
    this.errMessage = undefined;

    const formValues = this.authForm.value;
    console.log(formValues); // output: {email: "nellynellyam@gmail.com", password: "azerty"}
    console.log(this.authForm.value.email);//output: nellynellyam@gmail.com
    console.log(formValues.email);//output: nellynellyam@gmail.com
    this.authService.checkAuth(formValues.email, formValues.password)
    .then(() => {
      this.router.navigate(['users']);
    })
    .catch((errMsg: string) => {
      this.errMessage = errMsg;
      ;
    })
  }

}
