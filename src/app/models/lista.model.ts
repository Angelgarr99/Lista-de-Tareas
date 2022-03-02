import { ListaItem } from './lista-items.model';
export class Lista{

    id: number;
    titulo: string;
    creadoEn: Date;
    terminadaEn: Date;
    terminada: boolean;
    items: ListaItem[];

    constructor(titulo: string ){
        this.titulo = titulo;
        this.creadoEn = new Date();
        this.terminada = false;
        this.items = [];
        this.id = new Date().getTime();
    }
}