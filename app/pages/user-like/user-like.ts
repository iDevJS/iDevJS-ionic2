import {Page, NavController} from 'ionic-angular'

/*
  Generated class for the UserLikePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/user-like/user-like.html',
})
export class UserLikePage {
  constructor(private nav: NavController) {
    this.nav = nav;
  }
}
