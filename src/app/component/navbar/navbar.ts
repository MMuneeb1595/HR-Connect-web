import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Home } from '../../home/home';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule,Home],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar {

  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Platform', path: '/platform' },
    { label: 'Solution', path: '/solution' },
    { label: 'Modules', path: '/modules' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Resources', path: '/resources' },
    { label: 'Contact Us', path: '/contactus' },
  ];

  isMenuOpen = signal(false);
  screenWidth = window.innerWidth;

  @HostListener('window:resize')
  onResize() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth >= 768) {
      this.isMenuOpen.set(false);
    }
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}