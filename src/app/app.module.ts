import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import { AngularFireModule } from 'angularfire2';
import {environment} from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {DataService} from './data.service';
import {AngularFireDatabaseModule} from 'angularfire2/database';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebaseconfig),
        AngularFirestoreModule,
        AngularFireDatabaseModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
