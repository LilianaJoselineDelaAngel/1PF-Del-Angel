import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaComponent } from './Alumnos/lista/lista.component';
import { FormularioComponent } from './Alumnos/formulario/formulario.component';

@NgModule({
  declarations: [AppComponent, ListaComponent, FormularioComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule, //formularios reactivos
    FormsModule, //formularios de plantillas
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
