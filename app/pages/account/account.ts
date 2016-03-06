import {Page, NavController, Storage, SqlStorage} from 'ionic-framework/ionic'
import {LoginPage} from '../login/login'
import {UserProfilePage} from '../user-profile/user-profile'
import {UserPostPage} from '../user-post/user-post'
import {UserCommentPage} from '../user-comment/user-comment'
import {UserLikePage} from '../user-like/user-like'
import {SettingPage} from '../setting/setting'

/*
  Generated class for the AccountPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/account/account.html',
})
export class AccountPage {
  nightMode:boolean
  isLogin: boolean
  local:any
  pageList: Object = {
      login: LoginPage,
      profile: UserProfilePage,
      post: UserPostPage,
      comment: UserCommentPage,
      like: UserLikePage,
      setting: SettingPage
  }
  constructor(private nav: NavController) {
    this.nav = nav
    this.local = new Storage(SqlStorage)
    this.local.get('setting.nightMode')
        .then((val) => this.nightMode = val || false)
    this.local.get('bearerToken')
        .then((val) => this.isLogin = val || false)
  }
  goPage(text){
      this.nav.push(this.pageList[text])
  }
  toggleMode(val){
      this.local.set('setting.nightMode', val)
  }
}
