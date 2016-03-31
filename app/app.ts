import {App, IonicApp, Platform} from 'ionic-angular'
import {AppVersion, Device, Geolocation, Globalization, Keyboard, StatusBar, TouchID, Toast} from 'ionic-native'
import {Provider, provide} from 'angular2/core'
import {HTTP_PROVIDERS, Http} from 'angular2/http'
import 'rxjs/add/operator/map'
import {Client, AuthConfig} from 'idevjs-angular-client/api'
import {HomePage} from './pages/home/home'
import {ExplorePage} from './pages/explore/explore'
import {MessagePage} from './pages/message/message'
import {AccountPage} from './pages/account/account'

@App({
    templateUrl: 'build/app.html',
    providers: [provide(Client, {
        useFactory: (http) => {
            return new Client(new AuthConfig({}), http)
        },
        deps: [Http]
    })],
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
    pages: Array<{ title: string, component: any }>

    constructor(private app: IonicApp, private platform: Platform) {
        this.initializeApp()

        // set our app's pages
        this.pages = [
            { title: 'Home', component: HomePage },
            { title: 'Explore', component: ExplorePage },
            { title: 'Message', component: MessagePage },
            { title: 'Account', component: AccountPage }
        ]
    }

    initializeApp() {
        this.platform.ready().then(() => {
            StatusBar.overlaysWebView(true)
            StatusBar.backgroundColorByHexString('#ffb400')
            Geolocation.getCurrentPosition().then(pos => {
                Toast.showShortCenter('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
            })
            AppVersion.getVersionCode().then(code => {
                Toast.showShortBottom(code)
            })
            AppVersion.getVersionNumber().then(version => {
                Toast.showShortTop(version)
            })
            let info = Device.device
            Toast.showShortCenter(JSON.stringify(info))
            // The platform is now ready. Note: if this callback fails to fire, follow
            // the Troubleshooting guide for a number of possible solutions:
            //
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //
            // First, let's hide the keyboard accessory bar (only works natively) since
            // that's a better default:
            //
            Keyboard.hideKeyboardAccessoryBar(true)
            //
            // For example, we might change the StatusBar color. This one below is
            // good for dark backgrounds and light text:
            //   StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
        })
    }
}
