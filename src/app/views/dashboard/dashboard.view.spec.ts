import { TestBed, async } from '@angular/core/testing';
import { DashBoardView } from './dashboard.view';

describe('DashBoardView', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashBoardView
      ],
    }).compileComponents();
  }));

  it('should create the dashboardView', () => {
    const fixture = TestBed.createComponent(DashBoardView);
    const dashboardView = fixture.debugElement.componentInstance;
    expect(dashboardView).toBeTruthy();
  });

  it(`should have as title 'DashBoard View'`, () => {
    const fixture = TestBed.createComponent(DashBoardView);
    const dashboardView = fixture.debugElement.componentInstance;
    expect(dashboardView.title).toEqual('DashBoard View');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(DashBoardView);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to DashBoard View!');
  });
});
