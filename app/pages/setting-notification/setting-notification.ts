import {Page, NavController, Storage, SqlStorage} from 'ionic-angular'

/*
  Generated class for the SettingNotificationPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
    templateUrl: 'build/pages/setting-notification/setting-notification.html',
})
export class SettingNotificationPage {
    local: any
    notification: Object = {
        followme: true,
        mentionme: true,
        commentme: true,
        subscribeme: true
    }
    static get parameters() {
        return [[NavController]]
    }

    constructor(private nav: NavController) {
        this.nav = nav
        this.local = new Storage(SqlStorage)
        this.local.get('setting.notification')
            .then((val) => this.notification = JSON.parse(val) || this.notification)
    }
    updateNotificationSetting() {
        this.local.get('setting.notification', JSON.stringify(this.notification))
    }
}
