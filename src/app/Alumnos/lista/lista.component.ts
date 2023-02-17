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
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {
  dataSource!: MatTableDataSource<Alumnos>;
  constructor(
    private AlumnoListaService: AlumnoListaService,
    public dialog: MatDialog // public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Alumnos>();
    this.AlumnoListaService.obtenerAlumnosObservable().subscribe(
      (Alumnos: Alumnos[]) => {
        this.dataSource.data = Alumnos;
      }
    );
  }
  @ViewChild(MatTable) tabla!: MatTable<Alumnos>;

  seleccionado = null;
  editar(alumn: any) {
    console.log(alumn);
    this.seleccionado = alumn;
    const dialogRef = this.dialog.open(FormularioComponent, {
      data: alumn,
    });
  }

  eliminar(alumn: any) {
    var Aux = this.dataSource.data;
    Aux.forEach(function (currentValue, index, arr) {
      if (Aux[index] == alumn) {
        Aux.splice(index, 1);
      }
    });
    this.dataSource.data = Aux;
  }
}
