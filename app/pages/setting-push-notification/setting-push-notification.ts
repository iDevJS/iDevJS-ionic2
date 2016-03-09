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
  notification:Object = {
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
    this.local.get('setting.pushNotification')
        .then((val) => this.notification = JSON.parse(val) || this.notification)
  }
  
  updatePushSetting(){
      this.local.set('setting.pushNotification', JSON.stringify(this.notification))
  }
}
