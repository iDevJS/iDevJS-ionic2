import {Page, NavController} from 'ionic-framework/ionic'
import {LoginPage} from '../login/login'
/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  pageList: Object
  constructor(private nav: NavController) {
    this.nav = nav
    
    this.pageList = {
        login: LoginPage
    }
  }
  goPage(text){
    this.nav.push(this.pageList[text])
  }
}
