import {Page, NavController, NavParams} from 'ionic-angular'
import {Client} from 'idevjs-angular-client/api'

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
  constructor(private nav: NavController, private navParams: NavParams,private _client: Client) {
    this.nav = nav
    this._pid = this.navParams.get('id')
  }
  onPageLoaded(){
    this.getPost()
  }
  getPost(){
    this._client.getPost(this._pid)
        .subscribe(
            res => this.post = res,
            err => console.log(err),
            () => console.log('done')
        )
  }
}
