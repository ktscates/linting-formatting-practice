import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SampleComponentComponent } from './sample-component.component'

describe('SampleComponentComponent', () => {
  let component: SampleComponentComponent
  let fixture: ComponentFixture<SampleComponentComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleComponentComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SampleComponentComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should initialize with a list of items', () => {
    expect(component.items).toEqual(['Item 1', 'Item 2', 'Item 3'])
  })

  it('should log "SampleComponent initialized" when ngOnInit is called', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    component.ngOnInit()
    expect(consoleSpy).toHaveBeenCalledWith('SampleComponent initialized')
  })

  it('should select an item and log the selection', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    const item = 'Item 6'
    component.selectItem(item)
    expect(component.selectedItem).toBe(item)
    expect(consoleSpy).toHaveBeenCalledWith(`Selected item: ${item}`)
  })

  it('should call selectItem on Enter key press', () => {
    const item = 'Item 1'
    const event = new KeyboardEvent('keydown', { key: 'Enter' })
    const spySelectItem = jest.spyOn(component, 'selectItem')
    const preventDefaultSpy = jest.fn()
    Object.defineProperty(event, 'preventDefault', { value: preventDefaultSpy })

    component.onKeydown(event, item)

    expect(spySelectItem).toHaveBeenCalledWith(item)
    expect(preventDefaultSpy).toHaveBeenCalled()
  })

  it('should call selectItem on Space key press', () => {
    const item = 'Item 2'
    const event = new KeyboardEvent('keydown', { key: ' ' })
    const spySelectItem = jest.spyOn(component, 'selectItem')
    const preventDefaultSpy = jest.fn()
    Object.defineProperty(event, 'preventDefault', { value: preventDefaultSpy })

    component.onKeydown(event, item)

    expect(spySelectItem).toHaveBeenCalledWith(item)
    expect(preventDefaultSpy).toHaveBeenCalled()
  })
})
