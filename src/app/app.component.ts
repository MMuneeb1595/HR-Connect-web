import { Component } from '@angular/core';
import * as AOS from 'aos';

import {
  HeaderComponent,
  HeroComponent,
  FeaturesComponent,
  ModulesComponent,
  ReportComponent,
  TestimonialComponent,
  PricingComponent,
  FooterComponent
} from "./component/index";
import { Industry } from './component/industry/industry';
import { Technology } from './component/technology/technology';
import { Resourse } from './component/resourse/resourse';
import { Contactus } from './component/contactus/contactus';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,HeroComponent,FeaturesComponent,ModulesComponent,Industry,Technology,PricingComponent,Resourse,Contactus,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HRConnect';

  ngOnInit(): void {
    AOS.init({
      duration: 1000,     // animation duration (ms)
      easing: 'ease-in-out', // easing
      once: false,        // whether animation should happen only once
      mirror: true        // animate when scrolling back
    });
  }

  ngAfterViewInit(): void {
    // Refresh after Angular renders view
    setTimeout(() => AOS.refresh(), 100);
  }

}
