import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user.model'; // Altere o caminho conforme necessário
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  cadastroForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private router: Router
  ) {
    this.cadastroForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    });
  }

  async showSuccessToast() {
    const toast = await this.toastController.create({
      message: 'Usuário cadastrado com sucesso!',
      duration: 2000,
      color: 'success'
    });
    await toast.present();
  }

  async showErrorToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'danger'
    });
    await toast.present();
  }

  register() {
    if (this.cadastroForm.valid) {
      const { email, password, name, phone } = this.cadastroForm.value;
      const userData: User = { name, email, phone }; // Criando o objeto user com base no modelo
  
      this.authService.registerUser(email, password)
        .then((userCredential) => {
          // Usuário registrado com sucesso, agora vamos atualizar o nome do usuário no Firebase Auth
          const user = userCredential.user;
  
          if (user) {
            user.updateProfile({
              displayName: name // Atualiza o nome de exibição do usuário
            }).then(() => {
              // Depois de atualizar o nome, podemos salvar os dados no localStorage
              localStorage.setItem('userId', user.uid); // Armazena o ID do usuário
              localStorage.setItem('userName', name); // Armazena o nome
              localStorage.setItem('userEmail', email); // Armazena o e-mail
  
              // Agora, vamos salvar os dados adicionais (nome e telefone) no Firestore
              return this.authService.saveUserData(user.uid, userData);
            }).then(() => {
              console.log('Dados do usuário salvos com sucesso!');
              this.showSuccessToast(); // Exibe mensagem de sucesso
              this.redirectToLogin(); // Redireciona para a página de login
            });
          }
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            this.showErrorToast('Este email já está em uso. Tente outro.');
          } else {
            this.showErrorToast('Erro ao cadastrar usuário. Tente novamente.');
          }
        });
    }
  }
  
  



  redirectToLogin() {
    this.router.navigate(['/login']); // Redireciona para a página de login
  }
}
