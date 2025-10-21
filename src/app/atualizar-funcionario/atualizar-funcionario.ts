import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionariosService } from '../services/funcionarios';

@Component({
  selector: 'app-atualizar-funcionario',
  templateUrl: './atualizar-funcionario.component.html',
  styleUrls: ['./atualizar-funcionario.component.css']
})
export class AtualizarFuncionario implements OnInit {
  funcionarioForm!: FormGroup;
  id!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private funcionariosService: FuncionariosService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.criarFormulario();
    this.funcionariosService.getUserById(this.id).subscribe((dados: any) => {
      if (dados) {
        this.funcionarioForm.patchValue(dados);
      }
    });
  }

  criarFormulario(): void {
    this.funcionarioForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      sobrenome: ['', [Validators.required, Validators.minLength(3)]],
      sexo: [''],
      dtNascimento: [''],
      grauEscolaridade: [''],
      endereco: [''],
      foto: [''],
      salario: ['', [Validators.min(0)]],
      valorPassagem: ['', [Validators.min(0)]],
      optouVT: [false],
      cargo: [''],
      dataInicio: [''],
      dataDemissao: ['']
    });
  }

  atualizarFuncionario(): void {
    if (this.funcionarioForm.valid) {
      this.funcionariosService.updateById(this.id, this.funcionarioForm.value).subscribe(() => {
        alert('Funcionário atualizado com sucesso!');
        this.router.navigate(['/lista']);
      });
    }
  }

  voltar(): void {
    this.router.navigate(['/lista']);
  }
}

