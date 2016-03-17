import {Page, NavController, Storage, SqlStorage} from 'ionic-angular'

/*
  Generated class for the SettingPushNotificationPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/setting-push-notification/setting-push-notification.html',
})
export class SettingPushNotificationPage {
  local:any
  push:Object = {
      recommend: true,
      followme: true,
      mentionme: true,
      commentme: true,
      subscribeme: true,
      quietMode: false
  }
  quietMode: boolean = false
  constructor(private nav: NavController) {
    this.nav = nav
    this.local = new Storage(SqlStorage)
    this.local.get('setting.push')
        .then((val) => this.push = JSON.parse(val) || this.push)
  }
  
  updatePushSetting(){
      this.local.set('setting.push', JSON.stringify(this.push))
  }
}
