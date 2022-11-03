import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BautizoComponent } from './Componentes/bautizo/bautizo.component';
import { CancionesComponent } from './Componentes/canciones/canciones.component';
import { CancionfavComponent } from './Componentes/cancionfav/cancionfav.component';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import { Fiesta18Component } from './Componentes/fiesta18/fiesta18.component';
import { FinalComponent } from './Componentes/final/final.component';
import { FotofavComponent } from './Componentes/fotofav/fotofav.component';
import { GaleriaComponent } from './Componentes/galeria/galeria.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { MsjbonitosComponent } from './Componentes/msjbonitos/msjbonitos.component';
import { PortadaComponent } from './Componentes/portada/portada.component';
import { PrimerasfotosComponent } from './Componentes/primerasfotos/primerasfotos.component';
import { PrimermensajeComponent } from './Componentes/primermensaje/primermensaje.component';
import { SalidasvariasComponent } from './Componentes/salidasvarias/salidasvarias.component';
import { SecretoComponent } from './Componentes/secreto/secreto.component';
import { AniversarioComponent } from './Componentes/aniversario/aniversario.component';
import { QuizComponent } from './Componentes/quiz/quiz.component';
import { NotasbonitasComponent } from './Componentes/notasbonitas/notasbonitas.component';
import { AhorcadoComponent } from './Componentes/ahorcado/ahorcado.component';

const routes: Routes = [
  {path: '', redirectTo:'11/04', pathMatch:'full'},
  {path:'11/04',component:PortadaComponent},
  {path:'fiesta',component:Fiesta18Component},
  {path:'primermensaje',component:PrimermensajeComponent},
  {path:'primerasfotos',component:PrimerasfotosComponent},
  {path:'cancion',component:CancionfavComponent},
  {path:'fotofav',component:FotofavComponent},
  {path:'bautizo',component:BautizoComponent},
  {path:'canciones',component:CancionesComponent},
  {path:'msjbonitos',component:MsjbonitosComponent},
  {path:'galeria',component:GaleriaComponent},
  {path:'salidas',component:SalidasvariasComponent},
  {path:'secreto',component:SecretoComponent},
  {path:'final',component:FinalComponent},
  {path:'2años',component:AniversarioComponent},
  {path:'quiz',component:QuizComponent},
  {path:'notasb',component:NotasbonitasComponent},
  {path:'ahorcado',component:AhorcadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
