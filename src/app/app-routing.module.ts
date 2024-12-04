import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard'; // Certifique-se de estar importando o AuthGuard

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'pagina-inicial',
    loadChildren: () => import('./pagina-inicial/pagina-inicial.module').then(m => m.PaginaInicialPageModule),
    canActivate: [AuthGuard] // Protege essa rota com o AuthGuard
  },
  {
    path: 'jogo-velha',
    loadChildren: () => import('./jogo-velha/jogo-velha.module').then( m => m.JogoVelhaPageModule)
  },
  {
    path: 'jogo-memoria',
    loadChildren: () => import('./jogo-memoria/jogo-memoria.module').then( m => m.JogoMemoriaPageModule)
  },
  {
    path: 'simon-says',
    loadChildren: () => import('./simon-says/simon-says.module').then( m => m.SimonSaysPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'snake',
    loadChildren: () => import('./snake/snake.module').then( m => m.SnakePageModule)
  },
  // {
  //   path: 'comunidades',
  //   loadChildren: () => import('./comunidades/comunidades.module').then( m => m.ComunidadesPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
