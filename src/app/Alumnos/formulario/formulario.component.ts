import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  formulario: FormGroup;
  Mensaje: string = '';

  constructor() {
    let controles: any = {
      nombre: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'),
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'),
      ]),
    };
    this.formulario = new FormGroup(controles);
  }
  enviar() {
    console.log(this.formulario);
  }
}
