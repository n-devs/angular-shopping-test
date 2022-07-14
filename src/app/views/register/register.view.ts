import { Component } from '@angular/core';

@Component({
  selector: 'app-register-view',
  templateUrl: './register.view.html',
  styleUrls: ['./register.view.css']
})
export class RegisterView {
  register(name: string, email: string, password: string, passwordConf: string) {
    if (password === passwordConf) {
      console.log({
        name: name, email: email, password: password, passwordConf: passwordConf
      });
    } else {
      console.log("error password");

    }


  }
}
