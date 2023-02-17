import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaComponent } from './Alumnos/lista/lista.component';
import { FormularioComponent } from './Alumnos/formulario/formulario.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TablaComponent } from './components/tabla/tabla.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { AlumnoListaService } from './services/alumno-lista.service';
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FormularioComponent,
    TablaComponent,
  ],
  imports: [
    MatIconModule,
    MatTableModule,
    BrowserModule,
    ReactiveFormsModule, //formularios reactivos
    FormsModule, //formularios de plantillas
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
  ],

  exports: [MatTableModule, MatIconModule, MatDialogModule, MatButtonModule],
  providers: [
    AlumnoListaService,
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { hasBackdrop: false, panelClass: 'mat-dialog-override' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
