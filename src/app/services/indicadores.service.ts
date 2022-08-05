import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { IndicadorConfig, RespuestaApi } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class IndicadoresService {
    readonly configIndicadores: { [indicadorId: string]: IndicadorConfig } = Object.freeze({
        dolar: {
            id: 'dolar',
            nombreCorto: 'dolar',
            nombre: 'Dólar Observado',
            unidadDeMedida: 'pesos',
        },
        euro: {
            id: 'euro',
            nombreCorto: 'euro',
            nombre: 'Euro',
            unidadDeMedida: 'pesos',
        },
        ipc: {
            id: 'ipc',
            nombreCorto: 'ipc',
            nombre: 'Indice de Precios al Consumidor',
            unidadDeMedida: 'porcentaje',
        },
        uf: {
            id: 'uf',
            nombreCorto: 'uf',
            nombre: 'Unidad de Fomento',
            unidadDeMedida: 'pesos',
        },
        utm: {
            id: 'utm',
            nombreCorto: 'utm',
            nombre: 'Unidad Tributaria Mensual',
            unidadDeMedida: 'pesos',
        },
    });

    constructor(public http: HttpClient) {}

    getConfigIndicador(indicadorId: string) {
        return this.configIndicadores[indicadorId];
    }

    async getGrafico(indicadorId: string) {
        switch (indicadorId) {
            case 'dolar':
            case 'euro':
            case 'uf':
                return this.getUltimosDias(indicadorId, 10);

            case 'ipc':
            case 'utm':
                return this.getUltimos12Meses(indicadorId);

            default:
                throw 'Indicador ' + indicadorId + ' no configurado.';
        }
    }

    async getHistorico(indicadorId: string) {
        switch (indicadorId) {
            case 'dolar':
            case 'euro':
            case 'uf':
                return this.getUltimosDias(indicadorId, 30);

            case 'ipc':
            case 'utm':
                return this.getAnioActual(indicadorId);

            default:
                throw 'Indicador ' + indicadorId + ' no configurado.';
        }
    }

    private async getAnioActual(indicadorId: string) {
        const year = new Date().getFullYear();

        const url = this.getApiUrl(indicadorId, year.toString());

        const response = await this.makeHttpGetRequest<RespuestaApi>(url);

        return this.extractValues(response);
    }

    private async getUltimos12Meses(indicadorId: string) {
        const fechaDesde = new Date();

        fechaDesde.setFullYear(fechaDesde.getFullYear() - 1);

        const year = fechaDesde.getFullYear();
        const month = this.addLeadingZeroInNeeded(fechaDesde.getMonth() + 1);

        const url = this.getApiUrl(indicadorId, `posteriores/${year}/${month}`);

        const response = await this.makeHttpGetRequest<RespuestaApi>(url);

        return this.extractValues(response);
    }

    private async getUltimosDias(indicadorId: string, cantidadDias: number) {
        const fechaDesde = new Date();

        fechaDesde.setDate(fechaDesde.getDate() - cantidadDias);

        const year = fechaDesde.getFullYear();
        const month = this.addLeadingZeroInNeeded(fechaDesde.getMonth() + 1);
        const day = this.addLeadingZeroInNeeded(fechaDesde.getDate());

        const url = this.getApiUrl(indicadorId, 'posteriores/' + [year, month, 'dias', day].join('/'));

        const response = await this.makeHttpGetRequest<RespuestaApi>(url);

        return this.extractValues(response);
    }

    private getApiUrl(indicadorId: string, endpointTail = '') {
        let url =
            'https://api.cmfchile.cl/api-sbifv3/recursos_api/' +
            `${indicadorId}/${endpointTail}` +
            `?apikey=${environment.apiKey}&formato=json`;

        return url;
    }

    private makeHttpGetRequest<T>(url: string) {
        const observableResponse = this.http.get<T>(url);

        return lastValueFrom<T>(observableResponse);
    }

    private extractValues(response: RespuestaApi) {
        console.log({ response });
        console.log({ extracted: Object.values(response)[0] });
        return Object.values(response)[0].map((diaHistorico) => ({
            fecha: diaHistorico.Fecha,
            valor: this.currencyFormat(diaHistorico.Valor),
        }));
    }

    private currencyFormat(input: string) {
        return parseFloat(input.replace('.', '').replace(',', '.'));
    }

    private addLeadingZeroInNeeded(n: number) {
        return n > 9 ? n : `0${n}`;
    }
}
