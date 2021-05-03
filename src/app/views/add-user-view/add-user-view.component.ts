import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-user-view',
  templateUrl: './add-user-view.component.html',
  styleUrls: ['./add-user-view.component.css']
})
export class AddUserViewComponent implements OnInit {
  errMessage: string;
  addForm: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.email , Validators.required]],
    });
  }

  onSubmitAddUser() {
    let formValues = this.addForm.value;
    this.userService.addUser(formValues.firstName, formValues.lastName, formValues.email);
    this.router.navigate(["users"]);
  }

}
