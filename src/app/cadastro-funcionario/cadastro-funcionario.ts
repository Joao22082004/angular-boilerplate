import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FuncionariosService } from '../services/funcionarios';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-funcionario',
  standalone: false,
  templateUrl: './cadastro-funcionario.html',
  styleUrl: './cadastro-funcionario.css',
  changeDetection : ChangeDetectionStrategy . OnPush 
})
export class CadastroFuncionario {
  constructor(private funcionariosService : FuncionariosService, private router : Router){}
  funcionarioForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    sobrenome: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    dtNascimento: new FormControl('', Validators.required),
    grauEscolaridade: new FormControl('', Validators.required),
    endereco: new FormControl('', Validators.required),
    foto: new FormControl('', Validators.required),
    salario: new FormControl('', Validators.required),
    valorPassagem: new FormControl('', Validators.required),
    optouVT: new FormControl('', Validators.required),
    cargo: new FormControl('', Validators.required),
    dataInicio: new FormControl('', Validators.required),
    dataDemissao: new FormControl(null)
  })


  enviar() {
    this.funcionariosService.postFuncionarios(this.funcionarioForm.value)
      .subscribe((data) => {
        console.log(data);
      })
      this.router.navigate(["/lista"])

  }

}

