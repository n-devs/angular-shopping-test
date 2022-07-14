import { TestBed, async } from '@angular/core/testing';
import { CollectionView } from './collection.view';

describe('CollectionView', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CollectionView
      ],
    }).compileComponents();
  }));

  it('should create the loginView', () => {
    const fixture = TestBed.createComponent(CollectionView);
    const loginView = fixture.debugElement.componentInstance;
    expect(loginView).toBeTruthy();
  });

  it(`should have as title 'Collection View'`, () => {
    const fixture = TestBed.createComponent(CollectionView);
    const loginView = fixture.debugElement.componentInstance;
    expect(loginView.title).toEqual('Collection View');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(CollectionView);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Collection View!');
  });
});
