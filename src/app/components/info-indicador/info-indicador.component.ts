import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { DiaHistorico, IndicadorConfig } from 'src/app/interfaces/interfaces';
import { IndicadoresService } from 'src/app/services/indicadores.service';

@Component({
    selector: 'app-info-indicador',
    templateUrl: './info-indicador.component.html',
    styleUrls: ['./info-indicador.component.scss'],
})
export class InfoIndicadorComponent implements OnInit {
    dataGrafico: DiaHistorico[] = [];

    queryparamsSubscription = new Subscription();

    indicadorId = '';

    get primerDato() {
        return this.dataGrafico.length ? this.dataGrafico[0] : { fecha: '', valor: 0 };
    }

    get indicadorConfig() {
        return this.indicadorId
            ? this.indicadoresService.getConfigIndicador(this.indicadorId)
            : ({} as IndicadorConfig);
    }

    constructor(private route: ActivatedRoute, private indicadoresService: IndicadoresService) {}

    ngOnInit(): void {
        this.queryparamsSubscription = this.route.params
            .pipe(map((params) => params['id']))
            .subscribe((id) => this.getIndicadorData(id));
    }

    ngOnDestroy(): void {
        this.queryparamsSubscription.unsubscribe();
    }

    async getIndicadorData(_indicadorId: string) {
        if (this.indicadorId === _indicadorId && !Object.keys(this.dataGrafico)) {
            return;
        }
        this.indicadorId = _indicadorId;
        this.dataGrafico = await this.indicadoresService.getGrafico(this.indicadorId);
    }
}
