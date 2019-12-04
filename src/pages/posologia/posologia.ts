import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";

/**
 * Generated class for the PosologiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-posologia",
  templateUrl: "posologia.html"
})
export class PosologiaPage {
  horario: any = "4";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public statusBar: StatusBar
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad PosologiaPage");
    this.statusBar.styleDefault();
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString("#0c96c5");
  }
  ngOnDestroy() {
    this.statusBar.backgroundColorByHexString("#ff748e");
  }
}
