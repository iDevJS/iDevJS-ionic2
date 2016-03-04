import {Page, NavController} from 'ionic-framework/ionic'

/*
  Generated class for the UserProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/user-profile/user-profile.html',
})
export class UserProfilePage {
  constructor(private nav: NavController) {
    this.nav = nav;
  }
}
