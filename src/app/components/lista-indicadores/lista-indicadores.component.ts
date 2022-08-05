import { Component, OnInit } from '@angular/core';
import { Indicador } from 'src/app/interfaces/interfaces';
import { IndicadoresService } from 'src/app/services/indicadores.service';

@Component({
    selector: 'app-lista-indicadores',
    templateUrl: './lista-indicadores.component.html',
    styleUrls: ['./lista-indicadores.component.scss'],
})
export class ListaIndicadoresComponent implements OnInit {
    dataIndicadores: { [indicadorId: string]: Indicador } = {};

    public get listaIndicadoresId(): string[] {
        return Object.keys(this.dataIndicadores);
    }

    constructor(public indicadoresService: IndicadoresService) {}

    ngOnInit(): void {
        this.getIndicadoresData();
    }

    async getIndicadoresData() {
        this.dataIndicadores = await this.indicadoresService.getListaIndicadores();
    }
}
