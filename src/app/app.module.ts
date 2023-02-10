import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NuevoComponent } from './Alumnos/nuevo/nuevo.component';
import { ListaComponent } from './Alumnos/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
