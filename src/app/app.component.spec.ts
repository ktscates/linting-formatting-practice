import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'

describe('UserListComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have a title "linting-formatting-practice"', () => {
    expect(component.title).toEqual('linting-formatting-practice')
  })

  it('should log "x is 10" when ngOnInit is called', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    component.ngOnInit()
    expect(consoleSpy).toHaveBeenCalledWith('x is 10')
  })

  it('should log "20" when doSomething is called', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    component.doSomething()
    expect(consoleSpy).toHaveBeenCalledWith(20)
  })
})
