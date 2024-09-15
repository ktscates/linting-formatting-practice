import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UserListComponent } from './user-list.component'
import { UserService } from '../services/user.service'
import { User } from '../model/user.model'

describe('UserListComponent', () => {
  let component: UserListComponent
  let fixture: ComponentFixture<UserListComponent>
  let mockUserService: jest.Mocked<UserService>

  beforeEach(async () => {
    mockUserService = {
      getUsers: jest.fn(),
    } as unknown as jest.Mocked<UserService>

    const mockUsers: User[] = [
      { name: 'John Doe', age: 30 },
      { name: 'Jane Smith', age: 25 },
    ]

    mockUserService.getUsers.mockReturnValue(mockUsers)

    await TestBed.configureTestingModule({
      imports: [UserListComponent],
      providers: [{ provide: UserService, useValue: mockUserService }],
    }).compileComponents()

    fixture = TestBed.createComponent(UserListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should set users from UserService on initialization', () => {
    expect(component.users.length).toBe(2)
    expect(component.users[0].name).toBe('John Doe')
    expect(component.users[1].name).toBe('Jane Smith')
  })

  it('should call getUsers method from UserService when initialized', () => {
    expect(mockUserService.getUsers).toHaveBeenCalled()
  })
})
