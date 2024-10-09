import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) { }

  submit(form: NgForm){
    const {usuario, senha} = form.value;
    if(usuario == "admin" && senha == "123")
      this.router.navigate(["/home", usuario])
    else{
      alert("Usuário ou senha inválido")
    }
  }
}
