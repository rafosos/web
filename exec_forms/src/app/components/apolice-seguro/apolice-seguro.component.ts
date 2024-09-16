import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-apolice-seguro',
  templateUrl: './apolice-seguro.component.html',
  styleUrl: './apolice-seguro.component.css'
})
export class ApoliceSeguroComponent {
  eSexo = SEXO;
  sexo: SEXO = this.eSexo.masculino;
  valor: number = 0;

  submit(form: NgForm){
    let {sexo, idade, valorAuto } = form.value;
    idade = +idade;
    valorAuto = parseFloat(valorAuto);
    
    if(sexo == SEXO.masculino){
      if (idade <= 25)
        this.valor = 0.15 * valorAuto; 
      else 
        this.valor = 0.10 * valorAuto; 
    }
    else if (sexo == SEXO.feminino)
      this.valor = 0.08 * valorAuto;
    // • Se sexo for masculino e idade <= 25: Valor da apólice = 15% do valor do automóvel
    // • Se sexo for masculino e idade > 25: Valor da apólice = 10% do valor do automóvel
    // • Se sexo for feminino: Valor da apólice = 8% do valor do automóvel -->
  }
}

export enum SEXO{
  masculino, feminino
}