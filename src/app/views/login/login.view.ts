import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-view',
  templateUrl: './login.view.html',
  styleUrls: ['./login.view.css']
})


export class LoginView {

  @Output() loggedIn = new EventEmitter<object>();

  login(email: string, password: string) {
    console.log({ email: email, password: password });
    if (email && password) {
      console.log(`Emitting`);
      this.loggedIn.emit({ email, password });
    }
  }
}
