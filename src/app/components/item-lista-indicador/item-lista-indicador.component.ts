import { Component, Input } from '@angular/core';
import { IndicadorConfig } from 'src/app/interfaces/interfaces';

@Component({
    selector: 'app-item-lista-indicador',
    templateUrl: './item-lista-indicador.component.html',
    styleUrls: ['./item-lista-indicador.component.scss'],
})
export class ItemListaIndicadorComponent {
    @Input()
    indicador: IndicadorConfig = {
        id: '',
        nombre: '',
        nombreCorto: '',
        unidadDeMedida: 'pesos',
    };
}
