import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // ✅ FIXED
  templateUrl: './footer.component.html',
})
export class FooterComponent {

  email: string = '';

  // ✅ FIX 1: add missing legalLinks
 legalLinks = [
    { label: 'Privacy Policy', id: 'privacy-policy' },
    { label: 'Terms of Services', id: 'terms-of-services' },
    { label: 'GDPR Compliance', id: 'gdpr-compliance' }
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  constructor(private router: Router) {}

  // ✅ navigation with fragment
  navigateToSection(sectionId: string) {
    this.router.navigate([], {
      fragment: sectionId
    });

    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  // ✅ FIX 2: add missing method
  subscribe() {
    if (!this.email) return;

    console.log('Subscribed:', this.email);
    alert('Subscribed successfully!');
    this.email = '';
  }
}