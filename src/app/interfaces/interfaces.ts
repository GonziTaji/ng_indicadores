export interface Indicador {
    valor: string;
    fecha: Date;
    nombre: string;
    nombreCorto: string;
    indicadorId: string;
}

export interface RespuestaApi {
    [nombre: string]: {
        Valor: string;
        Fecha: string;
    }[];
}
