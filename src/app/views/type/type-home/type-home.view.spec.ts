import { TestBed, async } from '@angular/core/testing';
import { TypeHomeView } from './type-home.view';

describe('TypeHomeView', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TypeHomeView
      ],
    }).compileComponents();
  }));

  it('should create the typeHomeView', () => {
    const fixture = TestBed.createComponent(TypeHomeView);
    const typeHomeView = fixture.debugElement.componentInstance;
    expect(typeHomeView).toBeTruthy();
  });

  it(`should have as title 'TypeHome View'`, () => {
    const fixture = TestBed.createComponent(TypeHomeView);
    const typeHomeView = fixture.debugElement.componentInstance;
    expect(typeHomeView.title).toEqual('TypeHome View');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(TypeHomeView);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to TypeHome View!');
  });
});
