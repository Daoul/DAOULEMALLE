import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importar componentes
import { AppComponent } from './app.component';
import { AccesoComponent } from './acceso/acceso.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PedidoComponent } from './pedido/pedido.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path:'', component: AppComponent},
  {path:'acceso', component: AccesoComponent},
  {path:'carrito', component: CarritoComponent},
  {path:'pedido', component: PedidoComponent},
  {path:'registro', component: RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
