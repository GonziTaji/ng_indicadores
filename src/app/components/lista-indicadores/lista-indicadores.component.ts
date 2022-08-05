import { Component, OnInit } from '@angular/core';
import { IndicadorConfig } from 'src/app/interfaces/interfaces';
import { IndicadoresService } from 'src/app/services/indicadores.service';

@Component({
    selector: 'app-lista-indicadores',
    templateUrl: './lista-indicadores.component.html',
    styleUrls: ['./lista-indicadores.component.scss'],
})
export class ListaIndicadoresComponent implements OnInit {
    dataIndicadores: { [indicadorId: string]: IndicadorConfig } = {};

    public get listaIndicadoresId(): string[] {
        return Object.keys(this.dataIndicadores);
    }

    constructor(public indicadoresService: IndicadoresService) {}

    ngOnInit(): void {
        this.getIndicadoresData();
    }

    async getIndicadoresData() {
        this.dataIndicadores = this.indicadoresService.configIndicadores;
    }
}
