import {Page, Platform, NavParams, ViewController, NavController} from 'ionic-angular'
import {Toast} from 'ionic-native'
/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
    templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
    action: string
    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController
    ) {
        this.action = 'Login'
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    onLogin() {
        Toast.show('', 'short', 'center')
    }
}
