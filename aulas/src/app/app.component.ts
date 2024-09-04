import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Aula2';

  //Criar uma propriedade array com “Casa”, “Sobre” e “Contato” e alterar dinamicamente os itens do Menu
  navItems:Array<string> = ["Casa", "Sobre", "Contato"];

  // Criar uma propriedade index com valor 1 e atribuir esse valor ao Random da imagem do Primeiro Card
  indexImage:number = 1;

  // Criar um Objeto card e atribuir dinamicamente ao primeiro card.
  // Title = “Card 1”
  // Description = “This is the content of card 1.”
  card1 = new Card("Card 1", "This is the content of card 1.");

  inputDescription = new FormControl("");
}

class Card{
  title: string;
  description: string;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}
