///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../typings/browser/ambient/es6-shim/es6-shim.d.ts"/>
import {App, IonicApp, Platform} from 'ionic-angular'
import {HomePage} from './pages/home/home'
import {ExplorePage} from './pages/explore/explore'
import {MessagePage} from './pages/message/message'
import {AccountPage} from './pages/account/account'

@App({
  templateUrl: 'build/app.html',
  config: {
      tabSubPages: true,
      backButtonText: ''
  } // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
  // make HelloIonicPage the root (or first) page
  rootPage: any = HomePage
  accountPage: any = AccountPage
  explorePage: any = ExplorePage
  messagePage: any = MessagePage
  pages: Array<{title: string, component: any}>

  constructor(private app: IonicApp, private platform: Platform) {
    this.initializeApp()

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Explore', component: ExplorePage },
      { title: 'Message', component: MessagePage},
      { title: 'Account', component: AccountPage}
    ]
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false)
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
    })
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.app.getComponent('leftMenu').close()
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav')
    nav.setRoot(page.component)
  }
}
