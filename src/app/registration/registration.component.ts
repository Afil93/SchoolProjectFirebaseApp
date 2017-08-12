import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  error: any;

  constructor(public af: AngularFireAuth, private router: Router) {
    this.af.authState.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }


  register(registerInfo: NgForm) {

    this.af.auth.createUserWithEmailAndPassword(
      registerInfo.value.email.toString(), registerInfo.value.password
    ).then((isSuccess) => {
      console.log('Register success.')
      this.router.navigate(['/members']);
    }).catch(
      (err) => {
        console.log('Could not register user.');
        console.log(err);
        this.error = err;
      });

  }

}
