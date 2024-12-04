import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth'; // Atualizar importação
import { Firestore, doc, getDoc } from '@angular/fire/firestore'; // Atualizar importação
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private auth: Auth, private firestore: Firestore) {}

  // Método para obter o usuário autenticado
  getCurrentUser(): Observable<any> {
    return authState(this.auth); // Retorna o estado da autenticação
  }

  // Método para obter dados do usuário a partir do Firestore
  async getUserData(uid: string): Promise<any> {
    const userDoc = doc(this.firestore, `users/${uid}`); // Referência ao documento do usuário
    const userSnapshot = await getDoc(userDoc); // Obtém o documento do usuário
    return userSnapshot.data(); // Retorna os dados do documento
  }
}
