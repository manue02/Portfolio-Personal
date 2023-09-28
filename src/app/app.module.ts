import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { ResumenComponent } from './views/resumen/resumen.component';
import { PortafolioComponent } from './views/portafolio/portafolio.component';
import { ProyectosComponent } from './views/proyectos/proyectos.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { NavegacionComponent } from './views/navegacion/navegacion.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumenComponent,
    PortafolioComponent,
    ProyectosComponent,
    ContactoComponent,
    MenuComponent,
    NavegacionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, IonicModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
