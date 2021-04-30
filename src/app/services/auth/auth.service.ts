import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilService } from '../util/util.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string;
  token:string = "trshhhhh";

  constructor(private httpClient: HttpClient) {
    this.apiUrl = UtilService.getAPIUrl();
   }

   /**
    * Method to request API if the user exists and is correct
    * @param email
    * @param password
    */
   checkAuth(email: string, password: string) {
     const headers = new HttpHeaders({
       'Content-Type': 'application/json'
     });

     return new Promise((res, rej) => {
      this.httpClient.post(this.apiUrl + "/api/login/", {email, password}, {headers})
       .subscribe((token: string ) => {
             this.token = token;
             res("");
       },
       (resp: any) => {
           rej(resp.error.error)
       });


     });

   }

   /**
    * Log ot the user
    */
   logOut() {
     this.token = undefined;
   }



}
