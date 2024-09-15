import { Injectable } from '@angular/core'
import { User } from '../model/user.model'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
  ]

  constructor() {}

  getUsers() {
    return this.users
  }

  addUser(user: User) {
    this.users.push(user)
  }
}
