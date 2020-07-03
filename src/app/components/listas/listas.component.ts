import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
@ViewChild(IonList) lista: IonList;
@Input() terminada = true;
  constructor( public deseosService: DeseosService,
               private router: Router,
               private alertCtrl: AlertController) { }

  ngOnInit() {}
  listaSeleccionada( lista: Lista ) {
    if ( this.terminada ){
      this.router.navigateByUrl(`tabs/tab2/agregar/${lista.id}`);
    } else {
      this.router.navigateByUrl(`tabs/tab1/agregar/${lista.id}`);
    }
  }
  borrarLista(lista: Lista){
      this.deseosService.borrarLista(lista);
  }
  tFaltantes(lista: Lista){
    return  lista.items.filter( itemData => itemData.completado).length;


  }
  async editarNombreLista(lista: Lista){
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Nueva lista',
      inputs: [{
        name: 'titulo',
        value: lista.titulo,
        type: 'text',
        placeholder: 'Nombre de la lista'
      }],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancelar');
          this.lista.closeSlidingItems();
        }
      },
      {
        text: 'Guardar',
        role: 'refresh',
        handler: (data) => {
          if (data.titulo.length === 0){
              return;
          }
          this.deseosService.editaNombreLista(data.titulo, lista);
          this.lista.closeSlidingItems();
        }
      }
    ]
    });
    alert.present();
  }

}
