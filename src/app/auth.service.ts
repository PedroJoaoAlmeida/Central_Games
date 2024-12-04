import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../app/models/user.model'; // Importa o modelo
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {}

  // Função para criar um novo usuário
  registerUser(email: string, password: string): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  saveUserData(userId: string, userData: User): Promise<void> {
    return this.firestore.collection('users').doc(userId).set(userData);
  }

  isAuthenticated(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map(user => !!user) // Retorna true se o usuário estiver logado
    );
  }

  login(email: string, password: string): Promise<void> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          // Armazene o nome e email do usuário no localStorage
          localStorage.setItem('userEmail', user.email || ''); // Armazena o e-mail
          localStorage.setItem('userName', user.displayName || ''); // Armazena o nome (se disponível)
        }
        console.log('Usuário logado com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao fazer login:', error);
        throw error;
      });
  }
  

  logout(): Promise<void> {
    return this.afAuth.signOut().then(() => {
      console.log('Usuário deslogado com sucesso!');
    });
  }
  
}
