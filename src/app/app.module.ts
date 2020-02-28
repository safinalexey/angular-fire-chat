import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserLoginComponent} from './components/user-login/user-login.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {AuthService} from './services/auth.service';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './services/auth.guard';

const config = {
	apiKey: 'AIzaSyAiDNDNuqtF_gTmU6FXoBHcIjem0hDxVYY',
	authDomain: 'ng-chat-d6a53.firebaseapp.com',
	databaseURL: 'https://ng-chat-d6a53.firebaseio.com',
	projectId: 'ng-chat-d6a53',
	storageBucket: 'gs://ng-chat-d6a53.appspot.com/',
	messagingSenderId: '535595157361'
}

@NgModule({
	declarations: [
		AppComponent,
		UserLoginComponent,
		UserProfileComponent
	],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(config),
		AngularFirestoreModule, // firestore
		AngularFireAuthModule, // auth
		AngularFireStorageModule, // storage,,
		AngularFireDatabaseModule,
		RouterModule.forRoot([
			{ path: 'user', component: UserProfileComponent, canActivate: [AuthGuard]}
		])
	],
	providers: [AuthService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
