// header.component.ts
import { Component, signal, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  navLinks = [
    { label: 'Platform', id: 'platform' },
    { label: 'Solutions', id: 'solutions' },
    { label: 'Modules', id: 'modules' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Resources', id: 'resources' },
    { label: 'Contact Us', id: 'contact-us' }
  ];

  isMenuOpen = signal(false);
  activeSection = signal<string>('Home');
  screenWidth = window.innerWidth; // track screen width

  ngOnInit(): void {
    this.observeSections();
  }

  @HostListener('window:resize')
  onResize() {
    this.screenWidth = window.innerWidth;
    // auto-close menu if resizing to desktop
    if (this.screenWidth >= 768) {
      this.isMenuOpen.set(false);
    }
  }

  toggleMenu() {
    this.isMenuOpen.update((v) => !v);
  }

  observeSections() {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6
      }
    );

    sections.forEach((sec) => observer.observe(sec));
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection.set(sectionId);
    }
    this.isMenuOpen.set(false);
  }
}
