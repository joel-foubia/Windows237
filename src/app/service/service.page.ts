import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

const API_SERVICE = environment.SERVICE;
const API_SERVICE_DETAILS = environment.DETAILS;

@Component({
  selector: 'app-service', 
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {
  
  valueSelected : string = "1"; 
  data : any;
  
  segmentChanged(ev: any) {
    this.valueSelected = ev.detail.value;
    console.log('Segment changed', this.valueSelected);  
  }
  constructor(
              public httpClient: HttpClient
              ) { 
    // this.loadData();
  }

  ngOnInit() {
  }
  // loadData(){
  //   this.httpClient.get(`${API_SERVICE}${1}`).subscribe(res =>{
  //     this.data = res;
  //     for (let i = 0; i < this.data.groups.length; i++) {
  //       var array_data = this.data.groups[i];
  //     }
  //     console.log(array_data);
  //   });

    
  // }

}
