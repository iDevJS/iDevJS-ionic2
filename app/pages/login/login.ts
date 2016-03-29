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
  action:string = 'Login'
  constructor(private nav: NavController) {
    this.nav = nav
  }
  
  onPageLoaded(){
      localStorage.setItem('idevjs_token', 'cfd6275cb154ddb57d18f544544d72475f959964')
  }
  
  onLogin(){
     Toast.show('', 'short', 'center')
  }
}
