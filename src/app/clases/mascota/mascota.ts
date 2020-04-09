import { stringify } from 'querystring';

export class Mascota {
    nombre: string;
    imagen: string;
    tipo: string;

    constructor(nombre: string, imagen: string, tipo: string){
        this.nombre = (nombre);
        this.imagen = (imagen);
        this.tipo = (tipo);
    }
}