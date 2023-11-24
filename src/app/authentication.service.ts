import { Injectable } from '@angular/core';
import { Auth,createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, collection, doc, setDoc } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth: Auth, private fs: Firestore) {
  }

  createAccount(email:string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password).then((user) => {
      const usersCol = collection(this.fs, 'users');
      const userDocRef = doc(usersCol, user.user.uid)      
      setDoc(userDocRef, {name: ''})
    })
  }
  
  signin(email:string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
  }

  signout() {
    signOut(this.auth)
  }
}
