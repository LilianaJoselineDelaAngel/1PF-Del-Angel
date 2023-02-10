import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListaComponent } from '../lista/lista.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  formulario: FormGroup;
  Mensaje: string = '';

  @Input() lista: any;
  @Output() closeModal = new EventEmitter();

  onCloseModal(): void {
    this.closeModal.emit();
  }
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
      curso: new FormControl('', []),
      tareas: new FormControl('', []),
    };
    this.formulario = new FormGroup(controles);
  }

  enviar() {
    if (this.lista == 'nuevo') {
      let nuevaData = this.lista.push({
        nombre: this.formulario.controls['nombre'].value,
        apellidos: this.formulario.controls['apellidos'].value,
        curso: this.formulario.controls['curso'].value,
        tareas: this.formulario.controls['tareas'].value,
        asistencia: true,
      });
      this.lista = nuevaData;
    } else {
      console.log(this.lista);
      console.log(this.formulario);
      this.lista.nombre = this.formulario.controls['nombre'].value;
      this.lista.apellidos = this.formulario.controls['apellidos'].value;
      this.lista.curso = this.formulario.controls['curso'].value;
      this.lista.tareas = this.formulario.controls['tareas'].value;
    }
  }
}
