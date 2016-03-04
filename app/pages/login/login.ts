import {Page, NavController} from 'ionic-framework/ionic'

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
  action:string = 'login'
  constructor(private nav: NavController) {
    this.nav = nav
  }
}
