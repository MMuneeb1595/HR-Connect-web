import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  quickLinks = [
    { label: 'Platform', path: '/platform' },
    { label: 'Modules', path: '/modules' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Resources', path: '/resources' },
    { label: 'Contact', path: '/contact' }
  ];

  legalLinks = [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
    { label: 'GDPR Compliance', path: '/gdpr' }
  ];
 email: string = '';

  subscribe() {
    console.log('Subscribed:', this.email);
    this.email = '';
  }
  // socialIcons = [
  //   { icon: 'fa-brands fa-facebook-f', link: 'https://www.facebook.com' },
  //   { icon: 'fa-brands fa-linkedin-in', link: 'https://www.linkedin.com' },
  //   { icon: 'fa-solid fa-envelope', link: 'https://www.gmail.com' },
  // ];
}
