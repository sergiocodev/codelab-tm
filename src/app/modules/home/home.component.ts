import {AfterViewInit, Component,} from '@angular/core';
import {RouterLink} from "@angular/router";
declare var $: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    this._onHeaderCarousel()
    this._onTestimonialCarousel()
  }

  private _onHeaderCarousel() {
    $(".header-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      items: 1,
      dots: true,
      loop: true,
      nav : true,
      navText : [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
      ]
    });
  }

  private _onTestimonialCarousel() {
    $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      margin: 24,
      dots: false,
      loop: true,
      nav : true,
      navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
      ],
      responsive: {
        0:{
          items:1
        },
        992:{
          items:2
        }
      }
    });
  }
}
