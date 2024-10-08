import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private route: ActivatedRoute) { }

  usuario: string = "";

  ngOnInit(): void {
    this.usuario = this.route.snapshot.params['usuario'];
  }
}
