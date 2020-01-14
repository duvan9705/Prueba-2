import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private storage : Storage
  ) {}

  ionViewWillEnter() {
    this.storage.set('fases',[
      {'id':1,'fase':true},
      {'id':2,'fase':true},
      {'id':3,'fase':true},
      {'id':4,'fase':true},
      {'id':5,'fase':true},
      {'id':6,'fase':true}
    ]);
  }

}
