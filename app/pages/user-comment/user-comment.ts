import {Page, NavController} from 'ionic-angular'
/*
  Generated class for the UserCommentPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/user-comment/user-comment.html',
})
export class UserCommentPage {
  constructor(private nav: NavController) {
    this.nav = nav;
  }
}
