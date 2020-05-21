import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CrudService} from "../service/crud.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  formulaire: FormGroup;

  constructor(private _form: FormBuilder, private crudService: CrudService) {
  }
  onSubmit() {
    const data = this.formulaire.value;
    this.crudService.createEnseignants(data)
      .then(res => {
        /*do something here....
        maybe give a success message*/
      });
    console.log('the participant has been added'); /* success message  */
    this.formulaire.reset(); /* clear the form after add */
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
