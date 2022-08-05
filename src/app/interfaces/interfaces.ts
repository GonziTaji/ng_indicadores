export interface Indicador {
    valor: number;
    fecha: string;
    nombre: string;
    nombreCorto: string;
    indicadorId: string;
}

export interface IndicadorConfig {
    id: string;
    nombreCorto: string;
    nombre: string;
    unidadDeMedida: 'pesos' | 'porcentaje';
}

export interface DiaHistorico {
    valor: number;
    fecha: string;
}

export interface RespuestaApi {
    [nombre: string]: {
        Valor: string;
        Fecha: string;
    }[];
}
