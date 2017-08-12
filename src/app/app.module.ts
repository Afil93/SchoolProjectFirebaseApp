import {BrowserModule} from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {AppComponent} from './app.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {MembersComponent} from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';


export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCfCTMijmbfTa5tNkvaFkLtHCIstWqOfgs',
    authDomain: 'independent-studies-855ec.firebaseapp.com',
    databaseURL: 'https://independent-studies-855ec.firebaseio.com',
    projectId: 'independent-studies-855ec',
    storageBucket: 'independent-studies-855ec.appspot.com',
    messagingSenderId: '519125604329'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule {
}
