import { Component, OnInit } from '@angular/core';
import { IndicadoresService } from 'src/app/services/indicadores.service';

@Component({
    selector: 'app-historial-indicador',
    templateUrl: './historial-indicador.component.html',
    styleUrls: ['./historial-indicador.component.scss'],
})
export class HistorialIndicadorComponent implements OnInit {
    data = {};
    constructor(private indicadoresService: IndicadoresService) {}

    ngOnInit(): void {}

    async getIndicadorData() {}
}
