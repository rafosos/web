import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {
  lastResult: number = 0;

  submit(form: NgForm){
    var {ac1, ac2, ag, af} = form.value;
    this.lastResult = (ac1 * 0.15) + (ac2 * 0.30) + (ag * 0.10) + (af * 0.45);
  }
}
