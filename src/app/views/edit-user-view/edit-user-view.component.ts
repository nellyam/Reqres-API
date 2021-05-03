import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.modele';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-edit-user-view',
  templateUrl: './edit-user-view.component.html',
  styleUrls: ['./edit-user-view.component.css']
})
export class EditUserViewComponent implements OnInit {
  errMessage: string;
  editForm: FormGroup;
  user: User;
  id: number;


  constructor(private userService: UserService, private formBuilder: FormBuilder,
    private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {

    const id = this.router.snapshot.params.id;
    this.user = this.userService.getUsersInfos(+id);

    this._init();


  }

  _init() {
      this.editForm = this.formBuilder.group({
      firstName: [this.user.first_name, Validators.required],
      lastName: [this.user.last_name, Validators.required],
      email: [this.user.email, [Validators.email , Validators.required]],
    });
  }

  onSubmitEditUser() {
    let formValues = this.editForm.value;
    this.userService.editUser(this.user.id, formValues.firstName, formValues.lastName, formValues.email);
    this.route.navigate(["users"]);
  }




}
