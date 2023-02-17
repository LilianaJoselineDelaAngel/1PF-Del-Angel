import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaComponent } from './Alumnos/lista/lista.component';
import { FormularioComponent } from './Alumnos/formulario/formulario.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TablaComponent } from './components/tabla/tabla.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, ListaComponent, FormularioComponent, TablaComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule, //formularios reactivos
    FormsModule, //formularios de plantillas
    NgbModule, BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
