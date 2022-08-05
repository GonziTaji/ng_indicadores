import { Component, OnDestroy, OnInit } from '@angular/core';
import { IndicadoresService } from 'src/app/services/indicadores.service';
import { ActivatedRoute } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { DiaHistorico, IndicadorConfig } from 'src/app/interfaces/interfaces';

@Component({
    selector: 'app-historial-indicador',
    templateUrl: './historial-indicador.component.html',
    styleUrls: ['./historial-indicador.component.scss'],
})
export class HistorialIndicadorComponent implements OnInit, OnDestroy {
    dataHistorica: DiaHistorico[] = [];

    queryparamsSubscription = new Subscription();

    indicadorId = '';

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
        if (this.indicadorId === _indicadorId && !Object.keys(this.dataHistorica)) {
            return;
        }

        this.indicadorId = _indicadorId;

        this.dataHistorica = await this.indicadoresService.getHistorico(this.indicadorId);
    }
}
