import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importar componentes
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from './curso/curso.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { ProfesoreComponent } from './profesore/profesore.component';
import { FormularioAccesoComponent } from './formulario-acceso/formulario-acceso.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { FormularioConsultaComponent } from './formulario-consulta/formulario-consulta.component';

const routes: Routes = [
  {path:'', component:AppComponent},
  {path:'cursos', component: CursosComponent},
  {path:'curso', component: CursoComponent},
  {path:'alumnos', component: AlumnosComponent},
  {path:'alumno', component: AlumnoComponent},
  {path:'profesores', component: ProfesoresComponent},
  {path:'profesore', component: ProfesoreComponent},
  {path:'acceso', component: FormularioAccesoComponent},
  {path:'registro', component: FormularioRegistroComponent},
  {path:'consulta', component: FormularioConsultaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
