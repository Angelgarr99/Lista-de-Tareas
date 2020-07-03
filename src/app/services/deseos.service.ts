import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {
    this.cargarrSorage();
  }
  crearLista( titulo: string){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarSorage();
    return nuevaLista.id;
  }
  editaNombreLista( nuevoTitulo: string, lista: Lista){
    lista.titulo = nuevoTitulo;
    this.guardarSorage();
  }


  borrarLista( lista: Lista){
      this.listas = this.listas.filter( listaData => listaData.id !== lista.id);
      this.guardarSorage();
  }
  obtenerlista(id: string | number){
    id = Number(id);
    return this.listas.find( listaData => listaData.id === id );
  }

  guardarSorage(){
    localStorage.setItem('data', JSON.stringify(this.listas));
  }
  cargarrSorage(){
    if ( localStorage.getItem('data') ){
      this.listas = JSON.parse(localStorage.getItem('data'));
    }else{
      this.listas = [];
    }

  }
}
