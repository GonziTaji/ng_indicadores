import { Component, Input, OnInit } from '@angular/core';
import { Indicador } from 'src/app/interfaces/interfaces';

@Component({
    selector: 'app-item-lista-indicador',
    templateUrl: './item-lista-indicador.component.html',
    styleUrls: ['./item-lista-indicador.component.scss'],
})
export class ItemListaIndicadorComponent implements OnInit {
    @Input()
    indicadorData: Indicador = {
        fecha: new Date(),
        nombre: '',
        nombreCorto: '',
        valor: '',
        indicadorId: '',
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
