import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListaFuncionarios } from './lista-funcionarios/lista-funcionarios';
import { HttpClientModule } from '@angular/common/http';
import { FuncionariosService } from './services/funcionarios';
import { CadastroFuncionario } from './cadastro-funcionario/cadastro-funcionario';
import { ReactiveFormsModule } from '@angular/forms';
import { Admin } from './admin/admin';
import { Login } from './login/login';
import { Detalhes } from './detalhes/detalhes';
import { MatTableModule } from '@angular/material/table';
import { Card } from './card/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
    App,
    ListaFuncionarios,
    CadastroFuncionario,
    Admin,
    Login,
    Detalhes,
    Card,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
