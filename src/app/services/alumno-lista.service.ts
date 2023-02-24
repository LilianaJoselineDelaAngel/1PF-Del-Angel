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
    var Aux = this.lista;
    Aux.forEach(function (currentValue, index, arr) {
      if (Aux[index] == alumn) {
        Aux[index].nombre = form['nombre'].value;
        Aux[index].apellidos = form['apellidos'].value;
        Aux[index].curso = form['curso'].value;
        Aux[index].tareas = form['tareas'].value;
      }
    });
    this.lista = Aux;
    this.Alumnos$.next(this.lista);
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
