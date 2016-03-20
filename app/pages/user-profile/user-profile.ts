import {Page, NavController} from 'ionic-angular'
import {ActionSheet} from 'ionic-native'
import {Camera} from 'ionic-native'

/*
  Generated class for the UserProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
    templateUrl: 'build/pages/user-profile/user-profile.html',
})
export class UserProfilePage {
    constructor(private nav: NavController) {
        this.nav = nav
    }

    choosePhoto() {
        let buttonLabels = ['choose a photo', 'take photo']
        ActionSheet.show({
            'title': 'Update Photo',
            'buttonLabels': buttonLabels,
            'addCancelButtonWithLabel': 'Cancel',
            // 'addDestructiveButtonWithLabel': 'Delete'
        }).then(buttonIndex => {
            if (buttonIndex < 3) {
                Camera.getPicture({
                    sourceType: buttonIndex - 1
                })
            }
            console.log('Button pressed:' + buttonLabels[buttonIndex - 1])
        })
    }
}
