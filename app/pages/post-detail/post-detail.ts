import {Page, NavController, NavParams} from 'ionic-framework/ionic'

/*
  Generated class for the PostDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/post-detail/post-detail.html',
})
export class PostDetailPage {
  _pid:string
  post: Object
  constructor(private nav: NavController, private navParams: NavParams) {
    this.nav = nav
    this._pid = this.navParams.get('id')
  }
  onPageLoaded(){
    this.getPost()
  }
  getPost(){
    
  }
}
