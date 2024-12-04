import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,  // Aqui você injeta o AuthService
    private router: Router,
    private toastController: ToastController,
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async showErrorToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'danger'
    });
    await toast.present();
  }

  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      
      this.authService.login(email, password)  // Utiliza o AuthService para fazer o login
        .then(() => {
          this.router.navigate(['/pagina-inicial']); // Redireciona para a página inicial após o login
        })
        .catch(error => {
          console.error('Erro ao fazer login', error);
          // Aqui você pode exibir uma mensagem de erro para o usuário
          this.showErrorToast('E-mail ou Senha incorreto.');
        });
    }
  }

  redirectToCadastro() {
    this.router.navigate(['/cadastro']); // Redireciona para a página de cadastro
  }
}
