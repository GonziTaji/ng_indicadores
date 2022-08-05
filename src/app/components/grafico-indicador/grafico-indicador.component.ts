import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { DiaHistorico } from 'src/app/interfaces/interfaces';

@Component({
    selector: 'app-grafico-indicador',
    templateUrl: './grafico-indicador.component.html',
    styleUrls: ['./grafico-indicador.component.scss'],
})
export class GraficoIndicadorComponent implements OnInit {
    @Input()
    inputData: DiaHistorico[] = [];

    @Input()
    label = '';

    get lineChartData(): ChartConfiguration<'line'>['data'] {
        return this.inputData.reduce(
            (lineChartData, current) => {
                if (!lineChartData.labels) lineChartData.labels = []; // just for tslint nonsense :)

                lineChartData.labels.push(formatDate(current.fecha, 'shortDate', 'en'));
                lineChartData.datasets[0].data.push(current.valor);

                return lineChartData;
            },
            {
                labels: [] as string[],
                datasets: [
                    {
                        data: [] as number[],
                        label: this.label,
                        fill: true,
                        borderColor: 'black',
                        backgroundColor: 'rgba(158,195,230,0.3)',
                    },
                ],
            } as ChartConfiguration<'line'>['data']
        );
    }

    public lineChartOptions: ChartOptions<'line'> = {
        responsive: true,
    };

    constructor() {}

    ngOnInit(): void {}
}
