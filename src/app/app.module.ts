import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaIndicadoresComponent } from './components/lista-indicadores/lista-indicadores.component';
import { ItemListaIndicadorComponent } from './components/item-lista-indicador/item-lista-indicador.component';
import { HttpClientModule } from '@angular/common/http';
import { HistorialIndicadorComponent } from './components/historial-indicador/historial-indicador.component';
import { InfoIndicadorComponent } from './components/info-indicador/info-indicador.component';
import { ValorIndicadorComponent } from './components/valor-indicador/valor-indicador.component';
import { NgChartsModule } from 'ng2-charts';
import { GraficoIndicadorComponent } from './components/grafico-indicador/grafico-indicador.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
    declarations: [
        AppComponent,
        ListaIndicadoresComponent,
        ItemListaIndicadorComponent,
        HistorialIndicadorComponent,
        InfoIndicadorComponent,
        ValorIndicadorComponent,
        GraficoIndicadorComponent,
        AboutComponent,
    ],
    imports: [HttpClientModule, BrowserModule, AppRoutingModule, BrowserAnimationsModule, NgbModule, NgChartsModule],
    providers: [HttpClientModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
