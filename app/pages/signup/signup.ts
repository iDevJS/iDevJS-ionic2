import {Page, NavController} from 'ionic-angular'

/*
  Generated class for the SignupPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/signup/signup.html',
})
export class SignupPage {
  constructor(private nav: NavController) {
    this.nav = nav;
  }
}
