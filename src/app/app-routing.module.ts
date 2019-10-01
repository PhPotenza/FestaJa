import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cadastrar-servico', loadChildren: './cadastrar-servico/cadastrar-servico.module#CadastrarServicoPageModule' },
  { path: 'perfil-servico', loadChildren: './perfil-servico/perfil-servico.module#PerfilServicoPageModule' },
  { path: 'adicionar-evento', loadChildren: './adicionar-evento/adicionar-evento.module#AdicionarEventoPageModule' },
  { path: 'recuperar-senha', loadChildren: './recuperar-senha/recuperar-senha.module#RecuperarSenhaPageModule' },
  { path: 'insirir-codigo', loadChildren: './insirir-codigo/insirir-codigo.module#InsirirCodigoPageModule' },
  { path: 'alterar-senha', loadChildren: './alterar-senha/alterar-senha.module#AlterarSenhaPageModule' },
  { path: 'perfil-cliente', loadChildren: './perfil-cliente/perfil-cliente.module#PerfilClientePageModule' },
  { path: 'editar-perfil', loadChildren: './editar-perfil/editar-perfil.module#EditarPerfilPageModule' },
  { path: 'buffet', loadChildren: './buffet/buffet.module#BuffetPageModule' },
  { path: 'perfil-evento', loadChildren: './perfil-evento/perfil-evento.module#PerfilEventoPageModule' },
  { path: 'editar-servico', loadChildren: './editar-servico/editar-servico.module#EditarServicoPageModule' },
  { path: 'convidados', loadChildren: './convidados/convidados.module#ConvidadosPageModule' },
  { path: 'adicionar-convidados', loadChildren: './adicionar-convidados/adicionar-convidados.module#AdicionarConvidadosPageModule' },
  { path: 'divulgar-evento', loadChildren: './divulgar-evento/divulgar-evento.module#DivulgarEventoPageModule' },
  { path: 'perfil-evento/:id/:nome/:tipo', loadChildren: './perfil-evento/perfil-evento.module#PerfilEventoPageModule' },
  { path: 'editar-servico', loadChildren: './editar-servico/editar-servico.module#EditarServicoPageModule' },
  { path: 'adicionar-buffet', loadChildren: './adicionar-buffet/adicionar-buffet.module#AdicionarBuffetPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
