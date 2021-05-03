import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.modele';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-single-user-view',
  templateUrl: './single-user-view.component.html',
  styleUrls: ['./single-user-view.component.css']
})
export class SingleUserViewComponent implements OnInit {

  user: User;
  constructor(private router: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
   const id= this.router.snapshot.params.id;
   this.user = this.userService.getUsersInfos(+id);
  }

}
