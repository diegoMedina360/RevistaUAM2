import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule,Route} from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { PublicarArticuloComponent } from './publicar-articulo/publicar-articulo.component';
import { VistaAutorComponent } from './vista-autor/vista-autor.component';
import { VistaEditorComponent } from './vista-editor/vista-editor.component';
import { ListaAutoresParesComponent } from './lista-autores-pares/lista-autores-pares.component';
import { AsignarParComponent } from './asignar-par/asignar-par.component';
import {RemotoService} from './remoto.service';
const rutas:Route[]=[{path:'',component:PaginaPrincipalComponent},
                    {path:'InicioSesion',component:InicioSesionComponent},
                    {path:'Registro',component:RegistroComponent},
                    {path:'PublicarArticulo',component:PublicarArticuloComponent},
                    {path:'VistaAutor',component:VistaAutorComponent},
                    {path:'VistaEditor',component:VistaEditorComponent},
                    {path:'ListaEditor',component:ListaAutoresParesComponent},
                    {path:'AsignarPar',component:AsignarParComponent}];

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    InicioSesionComponent,
    RegistroComponent,
    PublicarArticuloComponent,
    VistaAutorComponent,
    VistaEditorComponent,
    ListaAutoresParesComponent,
    AsignarParComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [RemotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
