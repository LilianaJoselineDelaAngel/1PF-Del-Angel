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
    this.dialog.open(FormularioComponent, {
      data: alumn,
    });

    console.log(alumn);
    const dialogRef = this.dialog.open(FormularioComponent, {
      data: alumn,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      //this.dataSource.data.nombre = this.formulario.controls['nombre'].value;
      //this.dataSource.data.apellidos =
      // this.formulario.controls['apellidos'].value;
      // this.dataSource.data.curso = this.formulario.controls['curso'].value;
      //this.dataSource.data.tareas = this.formulario.controls['tareas'].value;

      var Aux = this.dataSource.data;
      console.log(this.dataSource.data);
      Aux.forEach(function (currentValue, index, arr) {
        if (Aux[index] == alumn) {
          console.log(Aux[index]);
          // Aux[index].nombre = FormularioComponent.name.controls['nombre'].value;
        }
      });
      this.dataSource.data = Aux;
      this.tabla.renderRows();
    });
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
