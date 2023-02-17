import { Component, ViewChild, Inject } from '@angular/core';
import { Alumnos } from '../../models/alumnos';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AlumnoListaService } from '../../services/alumno-lista.service';
import { FormularioComponent } from '../../Alumnos/formulario/formulario.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent {
  dataSource!: MatTableDataSource<Alumnos>;
  //dialog: any;
  constructor(
    private AlumnoListaService: AlumnoListaService,
    // private dialog: MatDialog
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Alumnos>();
    this.AlumnoListaService.obtenerAlumnosObservable().subscribe(
      (Alumnos: Alumnos[]) => {
        this.dataSource.data = Alumnos;
      }
    );
  }

  //dataSource: MatTableDataSource<Alumnos> = new MatTableDataSource<Alumnos>(
  // this.lista
  //);

  @ViewChild(MatTable) tabla!: MatTable<Alumnos>;

  columnas: string[] = ['Acciones', 'nombre', 'curso', 'tareas', 'asistencia'];

  seleccionado = null;
  // editar(alumn: any) {
  //   this.seleccionado = alumn;
  //}

  editar(alumn: Alumnos): void {
    this.dataSource.data.push({
      nombre: 'Julieta',
      apellidos: 'Ponce de León',
      curso: 'Angular JS',
      tareas: 5,
      esperadas: 10,
      asistencia: true,
    });

    //  this.dialog.open(FormularioComponent, {
    //  data: alumn,
    // });

    console.log(alumn);
    const dialogRef = this.dialog.open(FormularioComponent, {
      data: alumn,
    });

    this.tabla.renderRows();
  }

  eliminar(alumn: any) {
    var Aux = this.dataSource.data;
    console.log(this.dataSource.data);
    Aux.forEach(function (currentValue, index, arr) {
      if (Aux[index] == alumn) {
        Aux.splice(index, 1);
      }
    });
    this.dataSource.data = Aux;
    this.tabla.renderRows();
  }

  nuevo(alumn: any) {
    console.log(alumn);
    this.seleccionado = alumn;
    this.tabla.renderRows();
  }
}
