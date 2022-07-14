import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ProductDetailView } from './product-detail.view';
import { RouterTestingModule } from '@angular/router/testing';


describe('ProductDetailView', () => {
  let component: ProductDetailView;
  let fixture: ComponentFixture<ProductDetailView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailView],
      imports: [
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
