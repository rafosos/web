import { Component } from '@angular/core';

interface Tarefa {
  descricao: string;
  concluida: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exec_diretiva';

  tarefas: Tarefa[] = [
    {descricao: "Ir no mercado", concluida: false},
    {descricao: "Passear com o cachorro", concluida: false},
    {descricao: "Lavar o banheiro", concluida: true},
    {descricao: "Lavar a louça", concluida: false},
    {descricao: "Lavar roupa", concluida: true}
  ];


}
