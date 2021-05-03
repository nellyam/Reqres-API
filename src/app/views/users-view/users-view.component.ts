import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.modele';
import { UserService } from '../../services/user/user.service';


@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit, OnDestroy {
  users: Array<User>;
  userSubscription: Subscription;

  pageNbSubscription: Subscription;
  pageNb: Array<number>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this._initSubs();
    this.userService.getUsers();
  }

  _initSubs() {
    this.userSubscription = this.userService.userSubject.
    subscribe(
      (users: Array<User>) => {
      this.users = users;
      },

      (err) => {
      console.error(err)
      }
    );

    this.pageNbSubscription = this.userService.totalPagesSubject.
    subscribe(
      (totalPages: number) => {
      this.pageNb = [];
      for(let i = 1; i <= totalPages; i++) {
        this.pageNb.push(i);
      }
    },

     (err) => {
      console.error(err)
    }

  );

  }



  loadUsers(pageNb) {
     this.userService.getUsers(pageNb);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
    this.pageNbSubscription.unsubscribe();
   }
}
