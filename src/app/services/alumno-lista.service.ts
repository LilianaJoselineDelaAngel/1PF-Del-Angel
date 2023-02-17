import { Injectable } from '@angular/core';
import { Alumnos } from '../models/alumnos';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlumnoListaService {
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
  constructor() {}
  obtenerAlumnosObservable(): Observable<Alumnos[]> {
    return new Observable<Alumnos[]>((subscriptor) => {
      subscriptor.next(this.lista);
    });
  }
}
