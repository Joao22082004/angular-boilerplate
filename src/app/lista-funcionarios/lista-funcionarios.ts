import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../services/funcionarios';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-lista-funcionarios',
  standalone: false,
  templateUrl: './lista-funcionarios.html',
  styleUrl: './lista-funcionarios.css'
})

export class ListaFuncionarios implements OnInit {

  constructor(private funcionariosService: FuncionariosService, private router: Router, private route: ActivatedRoute) { }

  displayedColumns: string[] = ['nome', 'sobrenome', 'dtNascimento', 'salario', 'detalhes'];
  funcionariosLista: any[] = [];
  idUsuario: any = "";
  usuario: any;

  ngOnInit(): void {
  this.getFuncionarios();

  this.route.paramMap.subscribe(params => {
    this.idUsuario = params.get('id');
    if (this.idUsuario) {
      this.getUserDetails(this.idUsuario);
    }
  });
}

  getUserDetails(id: any) {
    return this.funcionariosService.getUserById(id)
      .subscribe((data: any) => {
        this.usuario = data
        console.log(this.usuario)
      });
  }

  getFuncionarios() {
    this.funcionariosService.getUsers().subscribe((data: any) => {
      this.funcionariosLista = data;
    })
  }

  detalhesFuncionario(id: Number) {
    this.router.navigate(['detalhes', id]);
  }

  cadastrarFuncionario(): void {
    this.router.navigate(['/cadastrar']);
  }

}



