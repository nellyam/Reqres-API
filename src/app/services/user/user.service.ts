import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from 'src/app/models/user.modele';
import {map} from "rxjs/operators";
import {UtilService} from '../util/util.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{

  apiUrl: string;

  userSubject: Subject<Array<User>>;
  private _users: Array<User>;

  totalPagesSubject: Subject<number>;
  private _totalPages: number;

  constructor(private httpClient: HttpClient) {
    this.userSubject = new Subject<Array<User>>();
    this.totalPagesSubject = new Subject<number>();
    this.apiUrl = UtilService.getAPIUrl();
   }

   ngOnInit(): void {

   }

   emitUserSubject() {
    this.userSubject.next(this._users.slice());
   }

   emitTotalPagesSubject() {
     this.totalPagesSubject.next(this._totalPages);
    }

  /**
   * Method to retrieve all the users from API
   */
   getUsers(pageNb: number = 1) {
     this.httpClient.get(this.apiUrl + "/api/users?page=" + pageNb)
      .subscribe(
           (res: any) => {
          this._users = res.data.map((user: any) => {
            return new User(user.id, user.email, user.first_name, user.last_name, user.avatar);
          });
          console.log(this._users);
          this._totalPages = res.total_pages;
          this.emitUserSubject();
          this.emitTotalPagesSubject();
        },
        (err) => {
          console.error(err);
        }
      );
   }



}
