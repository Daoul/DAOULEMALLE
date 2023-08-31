import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccesoComponent } from './acceso/acceso.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PedidoComponent } from './pedido/pedido.component';
import { RegistroComponent } from './registro/registro.component';
import { GestionServiciosComponent } from './gestion-servicios/gestion-servicios.component';
import { ListaServiciosComponent } from './lista-servicios/lista-servicios.component';


@NgModule({
  declarations: [
    AppComponent,
    AccesoComponent,
    CarritoComponent,
    PedidoComponent,
    RegistroComponent,
    GestionServiciosComponent,
    ListaServiciosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
