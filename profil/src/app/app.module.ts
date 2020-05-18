import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilComponent } from './profil/profil.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
