import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaComponent } from './components/media/media.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { ApoliceSeguroComponent } from './components/apolice-seguro/apolice-seguro.component';
import { CommonModule } from '@angular/common';
import {LOCALE_ID, DEFAULT_CURRENCY_CODE} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    CalculadoraComponent,
    CadastroClienteComponent,
    ApoliceSeguroComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
        provide: LOCALE_ID,
        useValue: 'pt'
    },
    {
        provide:  DEFAULT_CURRENCY_CODE,
        useValue: 'BRL'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
