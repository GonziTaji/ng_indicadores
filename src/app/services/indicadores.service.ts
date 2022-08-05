import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Indicador, IndicadorConfig, RespuestaApi } from '../interfaces/interfaces';

const API_KEY = '033ee42b20cf7762429c799ae5e3bc356f16335c';

@Injectable({
    providedIn: 'root',
})
export class IndicadoresService {
    readonly configIndicadores: { [indicadorId: string]: IndicadorConfig } = Object.freeze({
        dolar: {
            id: 'dolar',
            nombreCorto: 'dolar',
            nombre: 'Dólar Observado',
        },
        euro: {
            id: 'euro',
            nombreCorto: 'euro',
            nombre: 'Euro',
        },
        ipc: {
            id: 'ipc',
            nombreCorto: 'ipc',
            nombre: 'Indice de Precios al Consumidor',
        },
        tip: {
            id: 'tip',
            nombreCorto: 'tip',
            nombre: 'Tasa de Interés Promedio',
        },
        tmc: {
            id: 'tmc',
            nombreCorto: 'tmc',
            nombre: 'Tasa de Interés Máxima Convencional',
        },
        uf: {
            id: 'uf',
            nombreCorto: 'uf',
            nombre: 'Unidad de Fomento',
        },
        utm: {
            id: 'utm',
            nombreCorto: 'utm',
            nombre: 'Unidad Tributaria Mensual',
        },
    });

    constructor(public http: HttpClient) {}

    getConfigIndicador(indicadorId: string) {
        return this.configIndicadores[indicadorId];
    }

    async getHistorialIndicador(indicadorId: string) {
        let response: RespuestaApi;

        switch (indicadorId) {
            case 'dolar':
                const diasAConsultar = 30;
                const fechaDesde = new Date();

                fechaDesde.setDate(fechaDesde.getDate() - diasAConsultar);

                const year = fechaDesde.getFullYear();
                const month = addLeadingZeroInNeeded(fechaDesde.getMonth() + 1);
                const day = addLeadingZeroInNeeded(fechaDesde.getDate());

                const url = this.getApiUrl(indicadorId, 'posteriores/' + [year, month, 'dias', day].join('/'));

                response = await this.makeHttpGetRequest<RespuestaApi>(url);
                break;

            default:
                response = await this.makeHttpGetRequest<RespuestaApi>(this.getApiUrl(indicadorId));
                break;
        }

        return this.extractValues(response).map((diaHistorico) => ({
            fecha: diaHistorico.Fecha,
            valor: parseFloat(diaHistorico.Valor),
        }));

        function addLeadingZeroInNeeded(n: number) {
            return n > 9 ? n : `0${n}`;
        }
    }

    async getListaIndicadores() {
        const data: { [indicadorId: string]: Indicador } = {} as any;
        for (const [indicadorId, indicadorConfig] of Object.entries(this.configIndicadores)) {
            const { nombre, nombreCorto } = indicadorConfig;
            const response = await this.makeHttpGetRequest<RespuestaApi>(this.getApiUrl(indicadorId));

            const dataIndicador = this.extractValues(response)[0];

            data[indicadorId] = {
                nombre,
                nombreCorto,
                indicadorId,
                fecha: new Date(dataIndicador.Fecha),
                valor: dataIndicador.Valor,
            };
        }

        return data;
    }

    private getApiUrl(indicadorId: string, endpointTail = '') {
        let url =
            'https://api.cmfchile.cl/api-sbifv3/recursos_api/' +
            `${indicadorId}/${endpointTail}` +
            `?apikey=${API_KEY}&formato=json`;

        return url;
    }

    private makeHttpGetRequest<T>(url: string) {
        const observableResponse = this.http.get<T>(url);

        return lastValueFrom<T>(observableResponse);
    }

    private extractValues(response: RespuestaApi) {
        console.log({ response });
        console.log({ extracted: Object.values(response)[0] });
        return Object.values(response)[0];
    }
}
