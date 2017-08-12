import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  login(formInfo: NgForm) {
    console.log(formInfo.value.email);
    console.log(formInfo.value.password);
  }

}
