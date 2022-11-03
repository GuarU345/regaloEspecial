import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import { BautizoComponent } from './Componentes/bautizo/bautizo.component';
import { CancionesComponent } from './Componentes/canciones/canciones.component';
import { CancionfavComponent } from './Componentes/cancionfav/cancionfav.component';
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
import { HttpClient } from '@angular/common/http';
import { AhorcadoServiceService } from './Componentes/ahorcado-service.service';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BautizoComponent,
    CancionesComponent,
    CancionfavComponent,
    Fiesta18Component,
    FinalComponent,
    FotofavComponent,
    GaleriaComponent,
    InicioComponent,
    MsjbonitosComponent,
    PortadaComponent,
    PrimerasfotosComponent,
    PrimermensajeComponent,
    SalidasvariasComponent,
    SecretoComponent,
    AniversarioComponent,
    QuizComponent,
    NotasbonitasComponent,
    AhorcadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AhorcadoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
