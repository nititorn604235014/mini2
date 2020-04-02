import { DeteilPage } from './../deteil/deteil';
import { TestPage } from './../test/test';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  category = [{name:'คอนโดมิเนียม',imgeUrl:'https://f.ptcdn.info/813/033/000/1437923389-image-o.jpg'},
              {name:'อพาร์เมนท์',imgeUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwfJgPHaIEm-Dwlk9gkt4WdfZ100hPzqnLIwoihOCkXs0Fa9lQ&usqp=CAU'},
              {name:'แมนชัน',imgeUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8pD0iNFRa45C7rWVXdMIIhvr-3Q37ZklIMjKsdOV4O0miHoUW&usqp=CAU'},
              {name:'หอพัก',imgeUrl:'https://m.thaiware.com/upload_misc/software/2015_12/728/12284_15121323443363_29691.png'}
             ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  viewDetails(categoryName:string){
    console.log(categoryName);
     this.navCtrl.push('ListRoomPage',categoryName);
}

}
