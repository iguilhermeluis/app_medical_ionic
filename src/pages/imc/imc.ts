import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";

@IonicPage()
@Component({
  selector: "page-imc",
  templateUrl: "imc.html"
})
export class ImcPage {
  peso: any;
  altura: any;
  resultado: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public statusBar: StatusBar
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ImcPage");
    this.statusBar.styleDefault();
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString("#01c6b2");
  }
  ngOnDestroy() {
    this.statusBar.backgroundColorByHexString("#ff748e");
  }

  arredondar(v) {
    v = Math.round(v);
    v = v.toString(10);
    if (v.indexOf(".") != -1) return v.substring(0, v.indexOf("."));
    else return v;
  }

  calcular() {
    /* O cálculo do IMC é feito
    dividindo o peso (em quilogramas)
    pela altura (em metros) ao quadrado */

    /*
    Resultado	Situação
    Abaixo de 17	Muito abaixo do peso
    Entre 17 e 18,49	Abaixo do peso
    Entre 18,5 e 24,99	Peso normal
    Entre 25 e 29,99	Acima do peso
    Entre 30 e 34,99	Obesidade I
    Entre 35 e 39,99	Obesidade II (severa)
    Acima de 40	Obesidade III (mórbida)
    */
    let resultadoTemp =
      parseFloat(this.peso) /
      (parseFloat(this.altura) * parseFloat(this.altura));
    resultadoTemp = this.arredondar(resultadoTemp);
    this.resultado = resultadoTemp;
  }
}
