import { Component, OnInit } from '@angular/core';
import { getDatabase, ref, set, onValue } from 'firebase/database';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  messages: any[] = [];
  messageInput: string = '';

  constructor() { }

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    const db = getDatabase();
    const messagesRef = ref(db, 'messages');
    const currentUserId = localStorage.getItem('userId');
   


    onValue(messagesRef, (snapshot) => {
      this.messages = [];
      snapshot.forEach((childSnapshot) => {
        const message = childSnapshot.val();
        const messageClass = message.userId === currentUserId ? 'message-right' : 'message-left';
        this.messages.push({
          content: message.content,
          userName: message.userName,
          class: messageClass
        });
      });
    });
  }

  sendMessage() {
    const messageContent = this.messageInput.trim();
    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName'); // Obtém o nome do usuário

    if (messageContent) {
      const db = getDatabase();
      const messagesRef = ref(db, 'messages/' + Date.now());
      set(messagesRef, { content: messageContent, userId, userName }); // Envia o nome junto com a mensagem
      this.messageInput = '';
    }
  }

}
