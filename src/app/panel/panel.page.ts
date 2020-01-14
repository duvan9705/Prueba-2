import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.page.html',
  styleUrls: ['./panel.page.scss'],
})
export class PanelPage {

  parametro:any; //Valor que se recibe de la URL
  fases:any[]; //Array de las fases

  constructor(
    private storage : Storage
  ) {}

  ionViewWillEnter() {
    this.parametro = 2; //cambie este valor y haga la prueba
    this.loadFases(); //Funcion de carga de las fases
  }

  loadFases() {
    //Se llama del storage el array de las fases y la almacena en la variable global fases
    this.storage.get('fases').then(fases => {this.fases = fases});
  }

  add() {
    //Aca se guarda el index correspondiente del elemento que consultamos.
    var object = this.fases.findIndex((obj => obj.id == this.parametro));

    //A dicho elemento se le cambia su valor;
    this.fases[object].fase = false; 

    //Se llama el storage y se almacena, una vez almacenado se llama la funcion de carga de datos.
    this.storage.set('fases', this.fases).then(res => {
      this.loadFases();
    })
  }

}
