import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firestore: AngularFirestore) {}

  createParticipants(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('participants')
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }
  }
