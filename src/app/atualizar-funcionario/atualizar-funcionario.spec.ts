import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarFuncionario } from './atualizar-funcionario';

describe('AtualizarFuncionario', () => {
  let component: AtualizarFuncionario;
  let fixture: ComponentFixture<AtualizarFuncionario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtualizarFuncionario]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AtualizarFuncionario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
