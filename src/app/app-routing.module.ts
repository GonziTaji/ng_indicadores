import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialIndicadorComponent } from './components/historial-indicador/historial-indicador.component';
import { InfoIndicadorComponent } from './components/info-indicador/info-indicador.component';
import { ListaIndicadoresComponent } from './components/lista-indicadores/lista-indicadores.component';

const routes: Routes = [
    { path: '', component: ListaIndicadoresComponent },
    { path: 'historial/:id', component: HistorialIndicadorComponent },
    { path: 'info/:id', component: InfoIndicadorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
