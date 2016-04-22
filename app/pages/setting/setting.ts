import {Page, NavController, Storage, SqlStorage} from 'ionic-angular'
import {SettingPushNotificationPage} from '../setting-push-notification/setting-push-notification'
import {SettingNotificationPage} from '../setting-notification/setting-notification'
import {SettingFontSizePage} from '../setting-font-size/setting-font-size'
/*
  Generated class for the SettingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
    templateUrl: 'build/pages/setting/setting.html',
})
export class SettingPage {
    local: any
    setting = {
        noPicMode: false,
        language: 'zh'
    }
    languageList = [
        'zh',
        'en'
    ]
    languageMap: Object = {
        'zh': '中文',
        'en': 'English'
    }
    pageList: Object = {
        'settingPushNotification': SettingPushNotificationPage,
        'settingNotification': SettingNotificationPage,
        'settingFontSize': SettingFontSizePage
    }
    constructor(private nav: NavController) {
        this.nav = nav
        this.local = new Storage(SqlStorage)
        this.local.get('setting.noPicMode')
            .then((val) => this.setting.noPicMode = val || false)
        this.local.get('setting.language')
            .then((val) => {this.setting.language = val || 'zh'})
    }
    selectLang(val) {
        this.local.set('setting.language', val)
    }
    togglePicMode(val) {
        this.local.set('setting.noPicMode', val)
    }
    goPage(text) {
        this.nav.push(this.pageList[text])
    }
}
