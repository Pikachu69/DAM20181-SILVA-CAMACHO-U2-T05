import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CharacteristicsPage } from "../characteristics/characteristics";

import { UserService } from "../../services/user";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  curp: string;

  constructor(public navCtrl: NavController,
    public user: UserService) {
    this.curp = "";
  }

  isMen() {
    this.curp = this.curp.toUpperCase();
    if (this.curp[10] == 'H') {
      this.user.isMen = true;
      this.navCtrl.push(CharacteristicsPage);
    }else if (this.curp[10] == 'M') {
      this.user.isMen = false;
      this.navCtrl.push(CharacteristicsPage);
    }
  }
}
