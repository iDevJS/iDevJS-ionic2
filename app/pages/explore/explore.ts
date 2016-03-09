import {Page, NavController} from 'ionic-angular'

/*
  Generated class for the ExplorePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/explore/explore.html',
})
export class ExplorePage{
  slides: Object
  constructor(private nav: NavController) {
    this.nav = nav
  }
  goPage(text){
      console.log(text)
  }
}
