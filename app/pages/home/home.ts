import {Page, Modal, NavController} from 'ionic-angular'
import {Geolocation, TouchID, AppVersion, StatusBar, Device} from 'ionic-native'
import {Client} from 'idevjs-angular-client/api'
import {LoginPage} from '../login/login'
import {PostDetailPage} from '../post-detail/post-detail'

/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
    templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
    posts: any[]
    pageList: Object
    constructor(private nav: NavController, private _client: Client) {
        this.nav = nav
        this.pageList = {
            login: LoginPage
        }
    }
    onPageLoaded() {
        // StatusBar.backgroundColorByHexString('#ffb400')
        // StatusBar.overlaysWebView(false)
        Geolocation.getCurrentPosition().then(pos => {
            console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        })
        AppVersion.getVersionCode().then(code => {
            console.log(code)
        })
        AppVersion.getVersionNumber().then(version => {
            console.log(version)
        })
        let info = Device.device
        console.log(info)
        this._client.getPostList().
            subscribe(
                res => {this.posts = res},
                err => console.log(err),
                () => console.log('complete')
            )
    }
    doRefresh(refresher) {
        console.log('Doing Refresh', refresher)

        setTimeout(() => {
            refresher.complete();
            console.log("Complete");
        }, 2000);
    }

    doStart(refresher) {
        console.log('Doing Start', refresher);
    }

    doPulling(refresher) {
        console.log('Pulling', refresher);
    }

    goPage(text) {
        // let loginModal = Modal.create(LoginPage)
        // console.log(loginModal)
        // this.nav.present(loginModal)
        this.nav.push(this.pageList[text])
    }
    
    goDetail(post){
        this.nav.push(PostDetailPage, {
            id: post._id
        })
    }

    loadmore(infiniteScroll) {
        console.log('load more post')
        infiniteScroll.complete()
    }
}