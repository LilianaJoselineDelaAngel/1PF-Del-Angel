import { Injectable } from '@angular/core';
import { Alumnos } from '../models/alumnos';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlumnoListaService {
  private Alumnos$!: BehaviorSubject<Alumnos[]>;

  lista: Alumnos[] = [
    {
      nombre: 'Julieta',
      apellidos: 'Ponce de León',
      curso: 'Angular JS',
      tareas: 5,
      esperadas: 10,
      asistencia: true,
    },
    {
      nombre: 'Martín Elías',
      apellidos: 'de los Ríos Acosta',
      curso: 'React JS',
      tareas: 10,
      esperadas: 10,
      asistencia: true,
    },
    {
      nombre: 'Matías ',
      apellidos: 'de Greiff Rincón',
      curso: 'Angular JS',
      tareas: 9,
      esperadas: 10,
      asistencia: false,
    },
    {
      nombre: 'Sebastián',
      apellidos: 'del Campo Yepes',
      curso: 'Java Inicial',
      tareas: 8,
      esperadas: 10,
      asistencia: false,
    },
  ];
  constructor() {
    this.Alumnos$ = new BehaviorSubject(this.lista);
  }
  //observable
  // obtenerAlumnosObservable(): Observable<Alumnos[]> {
  //  return new Observable<Alumnos[]>((subscriptor) => {
  //    subscriptor.next(this.lista);
  //  });
  // }
  obtenerAlumnosObservable(): Observable<Alumnos[]> {
    return this.Alumnos$.asObservable();
  }
  editar(alumn: any, form: any) {
    //console.log(alumn);
    console.log('form', form);

    //this.dataSource.data.nombre = this.formulario.controls['nombre'].value;
    //this.dataSource.data.apellidos =
    // this.formulario.controls['apellidos'].value;
    // this.dataSource.data.curso = this.formulario.controls['curso'].value;
    //this.dataSource.data.tareas = this.formulario.controls['tareas'].value;
    let Nombre = form['nombre'].value;
    console.log('nombre', Nombre);

    let apellidos = form['apellidos'].value;
    let curso = form['curso'].value;
    let tareas = form['tareas'].value;

    var Aux = this.lista;
    console.log(this.lista);
    Aux.forEach(function (currentValue, index, arr) {
      if (Aux[index] == form) {
        Aux[index].nombre = Nombre;
        Aux[index].apellidos = apellidos;
        Aux[index].curso = curso;
        Aux[index].tareas = tareas;
      }
    });
    this.lista = Aux;
    //  this.tabla.renderRows();
    // form.reset({
    //   nombre: '',
    //   apellidos: '',
    //   curso: '',
    //   tareas: '',
    // });
  }

  eliminar(alumn: any) {
    var Aux = this.lista;
    console.log('Aux', Aux);
    console.log('alumn', this.lista);

    Aux.forEach(function (currentValue, index, arr) {
      if (Aux[index] == alumn) {
        Aux.splice(index, 1);
      }
    });
    this.lista = Aux;
    this.Alumnos$.next(this.lista);
  }
}
