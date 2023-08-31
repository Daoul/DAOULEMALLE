import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importar componentes
import { AppComponent } from './app.component';
import { AccesoComponent } from './acceso/acceso.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PedidoComponent } from './pedido/pedido.component';
import { RegistroComponent } from './registro/registro.component';
import { GestionServiciosComponent } from './gestion-servicios/gestion-servicios.component';
import { ListaServiciosComponent } from './lista-servicios/lista-servicios.component';

const routes: Routes = [
  {path:'', component: AppComponent},
  {path:'acceso', component: AccesoComponent},
  {path:'carrito', component: CarritoComponent},
  {path:'pedido', component: PedidoComponent},
  {path:'registro', component: RegistroComponent},
  {path:'gestion-servicios', component: GestionServiciosComponent},
  {path:'lista-servicios', component: ListaServiciosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
