import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-sample-component',
  standalone: true,
  imports: [],
  templateUrl: './sample-component.component.html',
  styleUrl: './sample-component.component.css',
})
export class SampleComponentComponent implements OnInit {
  items: string[] = ['Item 1', 'Item 2', 'Item 3']
  selectedItem: string | null = null

  constructor() {}

  ngOnInit(): void {
    console.log('SampleComponent initialized')
  }

  selectItem(item: string): void {
    this.selectedItem = item
    console.log(`Selected item: ${item}`)
  }

  onKeydown(event: KeyboardEvent, item: string): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.selectItem(item)
      event.preventDefault()
    }
  }
}
