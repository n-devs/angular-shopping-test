import { DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RegisterView } from './register.view';

describe('RegisterView', () => {
  let component: RegisterView;
  let fixture: ComponentFixture<RegisterView>;
  let submitEl: DebugElement;
  let loginEl: DebugElement;
  let passwordEl: DebugElement;
  let passwordConfEl: DebugElement;
  let nameEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegisterView
      ],
    }).compileComponents();
  }));

  beforeEach(() => {


    fixture = TestBed.createComponent(RegisterView);
    component = fixture.componentInstance;

    submitEl = fixture.debugElement.query(By.css('button'));
    loginEl = fixture.debugElement.query(By.css('input[type=email]'));
    passwordEl = fixture.debugElement.query(By.css('input[type=password]'));
    passwordConfEl = fixture.debugElement.query(By.css('input[type=passwordConf]'));
    nameEl = fixture.debugElement.query(By.css('input[type=name]'));


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
