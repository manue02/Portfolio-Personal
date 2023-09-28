import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResumenComponent } from './views/resumen/resumen.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { ProyectosComponent } from './views/proyectos/proyectos.component';
import { PortafolioComponent } from './views/portafolio/portafolio.component';
import { PaginaNoEncontradaComponent } from './views/PaginaNoEncontrada/PaginaNoEncontrada.component';

const routes: Routes = [
  { path: 'resumen', component: ResumenComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'menu', component: MenuComponent },

  { path: '', redirectTo: '/menu', pathMatch: 'full' }, // Default route
  { path: '**', component: PaginaNoEncontradaComponent }, // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
