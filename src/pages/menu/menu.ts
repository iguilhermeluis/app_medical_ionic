import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PamPage } from "../pam/pam";
import { ImcPage } from "../imc/imc";
import { PosologiaPage } from "../posologia/posologia";
import { SobrePage } from "../sobre/sobre";

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-menu",
  templateUrl: "menu.html"
})
export class MenuPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad MenuPage");
  }

  mudarPagina(page) {
    switch (page) {
      case "pam":
        this.navCtrl.push(PamPage);
        break;
      case "imc":
        this.navCtrl.push(ImcPage);
        break;
      case "posologia":
        this.navCtrl.push(PosologiaPage);
        break;
      case "sobre":
        this.navCtrl.push(SobrePage);
        break;
      default:
        break;
    }
  }
}
