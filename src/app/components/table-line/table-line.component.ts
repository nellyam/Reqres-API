import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: '[app-table-line]',
  templateUrl: './table-line.component.html',
  styleUrls: ['./table-line.component.css']
})
export class TableLineComponent implements OnInit {
  @Input() userId: number;
  @Input() userFirstName: string;
  @Input() userLastName: string;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  /**
   * Method to show a view with detailed informations
   */

  //appel au UserService depuis le composant - single-user-view
  onClickShowDetailsUser() {
    this.router.navigate(['user', +this.userId]);
  }

  /**
   * Method to show the view to edit the user infos
   */
    //appel au UserService depuis le composant - edit-user-view
  onClickEditUser() {
    this.router.navigate(['user', 'edit', +this.userId]);
  }

  /**
   * Method to delete the user
   */
  onClickDelete() {
     this.userService.deleteUser(+this.userId);
  }

}
