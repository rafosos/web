import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

export enum OPERACOES{
  sum,
  subtraction,
  division,
  times
}

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  resultado: number = 0;
  eOperacoes = OPERACOES;
  operacao: OPERACOES = OPERACOES.sum;

  submit(form: NgForm){
    let {num1, num2} = form.value;
    num1 = +num1;
    num2 = +num2;
    
    switch (this.operacao){
      case OPERACOES.sum:
        this.resultado = num1 + num2;
        break;
      case OPERACOES.subtraction:
        this.resultado = num1 - num2;
        break;
      case OPERACOES.division:
        this.resultado = num1 / num2;
        break;
      case OPERACOES.times:
        this.resultado = num1 * num2;
        break;
    }
  }
}
