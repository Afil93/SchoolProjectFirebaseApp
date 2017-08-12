import {Component, OnInit} from '@angular/core';

import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  error: any;

  constructor(public af: AngularFireAuth, private router: Router) {
    this.af.authState.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }


  login(loginInfo: NgForm) {

    this.af.auth.signInWithEmailAndPassword(
      loginInfo.value.email.toString(), loginInfo.value.password
    ).then((isSuccess) => {
      console.log('Login success.')
      this.af.authState.subscribe();
      console.log(this.af.auth.currentUser.getIdToken());
      this.router.navigate(['/members']);
    }).catch(
      (err) => {
        console.log('Could not login.');
        console.log(err);
        this.error = err;
      });

  }
}
