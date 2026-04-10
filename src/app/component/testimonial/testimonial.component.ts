import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  testimonials = [
    {
      name: 'Farhan',
      company: 'Tufail.ux Solutions',
      message:
        'Dashboard of HR Connect shows all employee data regarding how many employees that company has...',
      date: '18 June 2025',
      image: 'https://i.pravatar.cc/100?img=1',
    },
    {
      name: 'Ali',
      company: 'HR Connect',
      message:
        'Payroll and reports management made simple and efficient with HR Connect automation.',
      date: '12 July 2025',
      image: 'https://i.pravatar.cc/100?img=2',
    },
    {
      name: 'Sara',
      company: 'Tech Corp',
      message:
        'HR Connect simplifies workflows and enhances team productivity through automation.',
      date: '05 Aug 2025',
      image: 'https://i.pravatar.cc/100?img=3',
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    dots: false,
    nav: false,
    margin: 20,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 },
    },
  };
}
