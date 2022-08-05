export interface Indicador {
    valor: string;
    fecha: Date;
    nombre: string;
    nombreCorto: string;
    indicadorId: string;
}

export interface IndicadorConfig {
    id: string;
    nombreCorto: string;
    nombre: string;
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
