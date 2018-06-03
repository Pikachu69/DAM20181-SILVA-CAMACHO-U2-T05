import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/user';

/**
 * Generated class for the CharacteristicsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-characteristics',
  templateUrl: 'characteristics.html',
})
export class CharacteristicsPage {

  isMen:boolean;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public user:UserService) {
      this.isMen=user.isMen;
  }


}
