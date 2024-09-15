import { TestBed } from '@angular/core/testing'
import { UserService } from './user.service'
import { User } from '../model/user.model'

describe('UserService', () => {
  let service: UserService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(UserService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should return the initial list of users', () => {
    const users = service.getUsers()
    expect(users).toEqual([
      { name: 'John', age: 30 },
      { name: 'Jane', age: 25 },
    ])
  })

  it('should add a new user', () => {
    const newUser: User = { name: 'Alice', age: 28 }
    service.addUser(newUser)

    const users = service.getUsers()
    expect(users.length).toBe(3)
    expect(users[2]).toEqual(newUser)
  })
})
