import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {

  constructor(
              private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }
  // async loadData(){
  //   let loading = await this.loadingCtrl.create({
  //     message: "Patientez un instant...",
  //     spinner: 'dots'
  //   });
  //   loading.present();

  //   setTimeout(()=>{
  //     loading.dismiss();
  //   }, 5000);
  // }
}
