import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  /**
   * Returns the URL API
   */

 static getAPIUrl() {
    return "https://reqres.in";
  }
}
