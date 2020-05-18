import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  formulaire: FormGroup;

  constructor(private _form: FormBuilder) {
  }

  ngOnInit() {
    this.formulaire = this._form.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required]],
      agree: [false, [Validators.requiredTrue]]
    });
  }

  get email() {
    return this.formulaire.get('email');
  }

  get nom() {
    return this.formulaire.get('nom');
  }

  get prenom() {
    return this.formulaire.get('prenom');
  }

  get telephone() {
    return this.formulaire.get('telephone');
  }
}
