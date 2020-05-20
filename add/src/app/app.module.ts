import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AddComponent} from './add/add.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';

import {CrudService} from '../app/service/crud.service';
const firebaseConfig = {
  apiKey: 'AIzaSyBc8fyOHMiQ37gvCR7C5FblyOX8xbrLM48',
  authDomain: 'labtenangular.firebaseapp.com',
  databaseURL: 'https://labtenangular.firebaseio.com',
  projectId: 'labtenangular',
  storageBucket: 'labtenangular.appspot.com',
  messagingSenderId: '903240743950',
  appId: '1:903240743950:web:4ad69d2a355b6ebd60105f'
};

@NgModule({
  declarations: [
    AppComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
