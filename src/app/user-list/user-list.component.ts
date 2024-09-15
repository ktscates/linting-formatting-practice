import { Component, OnInit } from '@angular/core'
import { UserService } from '../services/user.service'
import { User } from '../model/user.model'

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users!: User[]

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers()
  }
}
