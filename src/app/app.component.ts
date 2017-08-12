import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public af: AngularFireAuth, private router: Router) {
    this.af.authState.subscribe(auth => {
      if (auth) {
        this.af.auth.signOut();
      }
    });
  }


  logout() {
    console.log('Logging out.');
    this.af.auth.signOut();
    this.router.navigateByUrl('/login');
  }

}
