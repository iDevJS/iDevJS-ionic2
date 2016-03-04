import {Page, NavController} from 'ionic-framework/ionic'

/*
  Generated class for the MessagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/message/message.html',
})
export class MessagePage {
  constructor(private nav: NavController) {
    this.nav = nav;
  }
}
