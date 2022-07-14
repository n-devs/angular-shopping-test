import { TestBed, async } from '@angular/core/testing';
import { CategoryView } from './category.view';

describe('CategoryView', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CategoryView
      ],
    }).compileComponents();
  }));

  it('should create the categoryView', () => {
    const fixture = TestBed.createComponent(CategoryView);
    const categoryView = fixture.debugElement.componentInstance;
    expect(categoryView).toBeTruthy();
  });

  it(`should have as title 'Category View'`, () => {
    const fixture = TestBed.createComponent(CategoryView);
    const categoryView = fixture.debugElement.componentInstance;
    expect(categoryView.title).toEqual('Category View');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(CategoryView);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Category View!');
  });
});
