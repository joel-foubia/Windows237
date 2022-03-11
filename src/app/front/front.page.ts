import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.page.html',
  styleUrls: ['./front.page.scss'],
})
export class FrontPage implements OnInit {
  option : any = {
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,
    spaceBetween: 1,
    coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }
  }
  constructor() { }

  ngOnInit() {
  }

}
