import { Component } from '@angular/core';
import { Alumnos } from '../../models/alumnos';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent {
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

  dataSource: MatTableDataSource<Alumnos> = new MatTableDataSource<Alumnos>(
    this.lista
  );
  columnas: string[] = [
    'Acciones',
    'Nombre',
    'Apellidos',
    'Curso',
    'tareas',
    'esperadas',
    'asistencia',
  ];
}
