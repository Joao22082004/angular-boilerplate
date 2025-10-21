import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaFuncionarios } from './lista-funcionarios/lista-funcionarios';
import { CadastroFuncionario } from './cadastro-funcionario/cadastro-funcionario';
import { AuthGuard } from './guard/auth.guard';
import { Login } from './login/login';
import { Detalhes } from './detalhes/detalhes';
import { AtualizarFuncionario } from './atualizar-funcionario/atualizar-funcionario';

const routes: Routes = [
  { path: 'lista', component: ListaFuncionarios },
  { path: 'cadastro', component: CadastroFuncionario },
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: 'cadastrar', component: CadastroFuncionario, canActivate: [AuthGuard] },
  { path: 'login', component: Login },
  { path: 'detalhes/:id', component: Detalhes },
  { path: 'atualizar/:id', component: AtualizarFuncionario },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
