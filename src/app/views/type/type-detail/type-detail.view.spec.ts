import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { TypeDetailView } from './type-detail.view';
import { RouterTestingModule } from '@angular/router/testing';


describe('TypeDetailView', () => {
  let component: TypeDetailView;
  let fixture: ComponentFixture<TypeDetailView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TypeDetailView],
      imports: [
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDetailView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
