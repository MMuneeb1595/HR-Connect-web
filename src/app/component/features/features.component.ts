import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  features = [
    {
      title: '100% SaaS-Based ',
      id: "employee",
      desc: `No hardware costs, no complex installations. Log in from anywhere, anytime`
    },
    {
      title: 'Mobile-First Design',
      id: "employee",
      desc: `Built with Flutter for native iOS and Android experiences. You team stays connected on the go.`
    },
    {
      title: 'Enterprise-Grade Security',
      id: "payroll",
      desc: `Granular role-based permissions ensure the right people see the right data.`
    },
    {
      title: 'Modern Tech Stack',
      id: "Pms",
      desc: `Powered by Laravel (backend) and Angular (frontend) for speard, reliability, and scalability.`,
    },
    {
      title: 'Pay-as-you-Grow',
      id: "performance",
      desc: `Flexible subscription plans that scale with your business.`
    },
  ];

  // Active card index
  activeIndex = signal<number | null>(0); // default: first card active

  setActive(index: number) {
    this.activeIndex.set(index);
  }
}
