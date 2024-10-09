import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {

  submit(form: NgForm){
    console.log(form);
    alert("Salvo com sucesso. Dados cadastrados:" +
      `\n Usuário: ${form.value.usuario}` +
      `\n Senha: ${form.value.senha}` +
      `\n Confirmação: ${form.value.confirma}`
    )

  }
}
