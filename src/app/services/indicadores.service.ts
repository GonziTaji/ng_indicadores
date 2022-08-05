import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Indicador, RespuestaApi } from '../interfaces/interfaces';

const API_KEY = '033ee42b20cf7762429c799ae5e3bc356f16335c';

@Injectable({
    providedIn: 'root',
})
export class IndicadoresService {
    private readonly configIndicadores = Object.freeze({
        dolar: {
            nombreCorto: 'dolar',
            nombre: 'Dólar Observado',
        },
        euro: {
            nombreCorto: 'euro',
            nombre: 'Euro',
        },
        ipc: {
            nombreCorto: 'ipc',
            nombre: 'Indice de Precios al Consumidor',
        },
        tip: {
            nombreCorto: 'tip',
            nombre: 'Tasa de Interés Promedio',
        },
        tmc: {
            nombreCorto: 'tmc',
            nombre: 'Tasa de Interés Máxima Convencional',
        },
        uf: {
            nombreCorto: 'uf',
            nombre: 'Unidad de Fomento',
        },
        utm: {
            nombreCorto: 'utm',
            nombre: 'Unidad Tributaria Mensual',
        },
    });

    constructor(public http: HttpClient) {}

    getConfigIndicador(indicadorId: string) {
        return (this.configIndicadores as any)[indicadorId];
    }

    async getHistorialIndicador(indicadorId: string) {
        switch (indicadorId) {
            case 'dolar':
                const diasAConsultar = 30;
                const fechaDesde = new Date();
                fechaDesde.setDate(fechaDesde.getDate() - diasAConsultar);
                const year = fechaDesde.getFullYear();
                const month = fechaDesde.getMonth() + 1;
                const day = fechaDesde.getDate();

                const url =
                    this.getApiUrl(indicadorId) + '/posteriores/' + [year, month, day, diasAConsultar].join('/');

                return this.makeHttpGetRequest<RespuestaApi>(url);

            default:
                return this.makeHttpGetRequest<RespuestaApi>(this.getApiUrl(indicadorId));
        }
    }

    async getListaIndicadores() {
        const data: { [indicadorId: string]: Indicador } = {} as any;
        for (const [indicadorId, indicadorConfig] of Object.entries(this.configIndicadores)) {
            const { nombre, nombreCorto } = indicadorConfig;
            const response = await this.makeHttpGetRequest<RespuestaApi>(this.getApiUrl(indicadorId));

            const dataIndicador = Object.values(response)[0][0];

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

    private getApiUrl(indicadorId: string) {
        let url = 'https://api.cmfchile.cl/api-sbifv3/recursos_api/' + `${indicadorId}?apikey=${API_KEY}&formato=json`;

        return url;
    }

    private makeHttpGetRequest<T>(url: string) {
        const observableResponse = this.http.get<T>(url);

        return lastValueFrom<T>(observableResponse);
    }
}
