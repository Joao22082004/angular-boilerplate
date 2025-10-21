import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../services/funcionarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-funcionarios',
  standalone: false,
  templateUrl: './lista-funcionarios.html',
  styleUrl: './lista-funcionarios.css'
})

export class ListaFuncionarios implements OnInit {

  constructor(private funcionarios: FuncionariosService ,private router : Router) { }

  displayedColumns: string[] = ['nome', 'sobrenome', 'dtNascimento', 'salario','detalhes'];
  funcionariosLista = [];

  ngOnInit() {
    this.getFuncionarios();
  }

  getFuncionarios() {
    this.funcionarios.getUsers().subscribe((data : any)=>{
      this.funcionariosLista = data;
    })
  }

  detalhesFuncionario(id: Number) {
    this.router.navigate(['detalhes',id]);
  }

  cadastrarFuncionario() : void {
    this.router.navigate(['/cadastrar']);
  }

}



