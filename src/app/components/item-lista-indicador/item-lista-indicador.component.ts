import { Component, Input, OnInit } from '@angular/core';
import { Indicador, IndicadorConfig } from 'src/app/interfaces/interfaces';

@Component({
    selector: 'app-item-lista-indicador',
    templateUrl: './item-lista-indicador.component.html',
    styleUrls: ['./item-lista-indicador.component.scss'],
})
export class ItemListaIndicadorComponent implements OnInit {
    @Input()
    indicador: IndicadorConfig = {
        id: '',
        nombre: '',
        nombreCorto: '',
    };

    constructor() {}

    ngOnInit(): void {}

    goToHistorial() {
        alert('historial');
    }

    goToInfo() {
        alert('info');
    }
}
