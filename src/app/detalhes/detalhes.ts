import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionariosService } from '../services/funcionarios';


@Component({
  selector: 'app-detalhes',
  standalone: false,
  templateUrl: './detalhes.html',
  styleUrl: './detalhes.css'
})

export class Detalhes {
  constructor(private route: ActivatedRoute, private funcionariosService: FuncionariosService,private router: Router ) { }

  idUsuario: any = ""
  usuario: any

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idUsuario = params.get('id');
      this.getUserDetails(params.get('id'))
    })
  }

  getUserDetails(id: any) {
    return this.funcionariosService.getUserById(id)
      .subscribe((data: any) => {
        this.usuario = data
        console.log(this.usuario)
      });
  }

}

