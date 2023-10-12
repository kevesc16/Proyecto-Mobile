import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { DocumentData, Firestore, addDoc, collection, collectionData, doc, getDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: Firestore

    ) { }

  addUser(user: User){
    const userRef = collection(this.firestore, 'users');
    return addDoc(userRef,user);
  }

  getUsers(): Observable<User[]>{
    const userRef = collection(this.firestore, 'repartidores');
    return collectionData(userRef, {idField: 'id'}) as Observable<User[]>;
  }

  async getUserById(userId: string): Promise<DocumentData | undefined> {
    const userDocRef = doc(this.firestore, 'repartidores', userId);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      return userDocSnap.data();
    } else {
      return undefined;
    }
  }
}
