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
  constructor(private form: FormBuilder, private crudService: CrudService) {
  }
  onSubmit() {
    const data = this.formulaire.value;
    this.crudService.createParticipants(data)
      .then(res => {
        /*do something here....
        maybe clear the form or give a success message*/
      });
  }
  ngOnInit() {
    this.formulaire = this.form.group({
      id: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      age: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required]],
    });
  }
}
