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
