import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  
  slideOptions: any ={ 
    spaceBetween: 8,
    slidePerView: 1.5
  };
  constructor() { }

  ngOnInit() {
  }

}
