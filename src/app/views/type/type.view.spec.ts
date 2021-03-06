import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TypeView } from './type.view';

describe('TypeView', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TypeView
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TypeView);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
