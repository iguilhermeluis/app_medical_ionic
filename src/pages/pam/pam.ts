import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";

@IonicPage()
@Component({
  selector: "page-pam",
  templateUrl: "pam.html"
})
export class PamPage {
  pas: any; // Pressão arterial sistolica
  pad: any; // Pressão arterial diastólica
  pam: any; // PRESSÃO ARTERIAL MÉDIA

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public statusBar: StatusBar
  ) {}

  ionViewDidLoad() {
    this.statusBar.backgroundColorByHexString("#ff748e");
  }

  arredondar(v) {
    v = Math.round(v);
    v = v.toString(10);
    if (v.indexOf(".") != -1) return v.substring(0, v.indexOf("."));
    else return v;
  }

  calcular() {
    /*  formula PAM = (PAS + 2x PAD)/3 */
    this.pam = (parseFloat(this.pas) + 2 * parseFloat(this.pad)) / 3;
    this.pam = this.arredondar(this.pam);
  }
}
