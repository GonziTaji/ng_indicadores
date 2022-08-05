import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-valor-indicador',
    templateUrl: './valor-indicador.component.html',
    styleUrls: ['./valor-indicador.component.scss'],
})
export class ValorIndicadorComponent {
    /** unidad de medida de indicador */
    @Input()
    udmIndicador: string = '';

    @Input()
    valorIndicador: number = 0;
}
