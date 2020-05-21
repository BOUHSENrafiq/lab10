import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firestore: AngularFirestore) {}

  createEnseignants(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('enseignants')
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }
}
