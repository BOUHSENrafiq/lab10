import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formulaire: FormGroup;

  constructor(private _form: FormBuilder) {
  }

  ngOnInit() {
    this.formulaire = this._form.group({
      id: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      age: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required]],
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

  get id() {
    return this.formulaire.get('id');
  }

  get age() {
    return this.formulaire.get('age');
  }
}
