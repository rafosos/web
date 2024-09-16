import { Component } from '@angular/core';
import { Cliente } from './Cliente';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css'
})
export class CadastroClienteComponent {
  alunos: Cliente[] = [];

  submit(form: NgForm){
    if (!form.valid)
      return;

    console.log("Novo cadastro: " + JSON.stringify(form.value))

    const {id, nome, email, idade} = form.value;
    this.alunos.push(new Cliente(id, nome, email, idade));
  }
}
