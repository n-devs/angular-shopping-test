import { TestBed, async } from '@angular/core/testing';
import { NotFoundView } from './not-found.view';

describe('NotFoundView', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotFoundView
      ],
    }).compileComponents();
  }));

  it('should create the dashboardView', () => {
    const fixture = TestBed.createComponent(NotFoundView);
    const dashboardView = fixture.debugElement.componentInstance;
    expect(dashboardView).toBeTruthy();
  });

  it(`should have as title 'NotFound View'`, () => {
    const fixture = TestBed.createComponent(NotFoundView);
    const dashboardView = fixture.debugElement.componentInstance;
    expect(dashboardView.title).toEqual('NotFound View');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(NotFoundView);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to NotFound View!');
  });
});
