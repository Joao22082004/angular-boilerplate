import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionariosService } from '../services/funcionarios';


@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  constructor(private route: ActivatedRoute, private funcionariosService: FuncionariosService, private router: Router) { }


  @Input() id: string = "";
  @Input() nome: string = "";
  @Input() sobrenome: string = "";
  @Input() salarioAtual: number = 0;
  @Input() endereco: string = "";
  @Input() optouVT: any;

  deletarFuncionario(id: string) {
    if (confirm('Tem certeza que deseja deletar este funcionário?')) {
      this.funcionariosService.deleteUserById(id).subscribe({
        next: () => {
          alert('Funcionário deletado com sucesso!');
          this.router.navigate(['/lista-funcionarios']);
        },
        error: (err) => {
          console.error('Erro ao deletar funcionário:', err);
          alert('Erro ao deletar funcionário.');
        }
      });

    }
  }

  irParaAtualizar(id: string) {
    this.router.navigate(['/atualizar', id]);
  }
}
