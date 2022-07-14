import { TestBed, async } from '@angular/core/testing';
import { ProductHomeView } from './product-home.view';

describe('ProductHomeView', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductHomeView
      ],
    }).compileComponents();
  }));

  it('should create the typeHomeView', () => {
    const fixture = TestBed.createComponent(ProductHomeView);
    const typeHomeView = fixture.debugElement.componentInstance;
    expect(typeHomeView).toBeTruthy();
  });

  it(`should have as title 'ProductHome View'`, () => {
    const fixture = TestBed.createComponent(ProductHomeView);
    const typeHomeView = fixture.debugElement.componentInstance;
    expect(typeHomeView.title).toEqual('ProductHome View');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(ProductHomeView);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ProductHome View!');
  });
});
