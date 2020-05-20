import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservices: AngularFirestore) {}

  createParticipant(create){
    return this.fireservices.collection('participants').add(create);
    }
  }
