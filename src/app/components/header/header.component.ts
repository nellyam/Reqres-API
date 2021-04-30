import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  /**
   * Mehod to navigate to add-user-view
   */
  addUser() {
      this.router.navigate(['user', 'add']); //{path: 'user/add', canActivate: [AuthGuardService], component: AddUserViewComponent},
  }


   /**
   * Mehod to logout a user
   */
  onClicklogout() {
    this.authService.logOut();
    this.router.navigate(['auth']);
  }

}
