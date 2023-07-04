import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditarComponent } from './Componentes/editar/editar.component';
import { GuardarComponent } from './Componentes/guardar/guardar.component';
import { EliminarComponent } from './Componentes/eliminar/eliminar.component';
import { ListarComponent } from './Componentes/listar/listar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './Servicios/service.service';

@NgModule({
  declarations: [
    AppComponent,
    EditarComponent,
    GuardarComponent,
    EliminarComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
