import { Component, OnInit } from '@angular/core'
import { UserListComponent } from './user-list/user-list.component'
import { SampleComponentComponent } from './components/sample-component/sample-component.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserListComponent, SampleComponentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'linting-formatting-practice'

  constructor() {
    console.log('App component initialized')
  }

  ngOnInit() {
    const x = 10
    if (x == 10) {
      console.log('x is 10')
    }
  }

  public doSomething(): void {
    const y = 20
    console.log(y)
  }
}
