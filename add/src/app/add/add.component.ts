import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CrudService} from '../service/crud.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  private formulaire: FormGroup;
  constructor(private _form: FormBuilder, public _crudService: CrudService) {
  }
  createParticpant(){
    let create = {};
    create['id'] = this.id;
    create['name'] = this.nom;
    create['firstname'] = this.prenom;
    create['age'] = this.age;
    create['email'] = this.email;
    create['phone'] = this.telephone;
    this._crudService.createParticipant(create).then(resp => {
     this.id = '';
     this.nom = '';
     this.prenom = '';
     this.age = '';
     this.email = '';
     this.telephone = '';
     console.log(resp);
    }).catch(error => { console.log('error'); });
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
