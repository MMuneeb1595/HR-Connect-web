import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,} from '@angular/forms';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
 addOns = [
  {
    name: 'Recruitment Management',
    description: 'Simplifies hiring and onboarding for a faster, more efficient recruitment process.',
    price: 15,
    icon: 'fas fa-user-plus'
  },
  {
    name: 'Loan Management',
    description: 'Manages employee loans smoothly with easy tracking and repayment handling.',
    price: 10,
    icon: 'fas fa-hand-holding-usd'
  },
  {
    name: 'Visitors Management',
    description: 'Tracks and manages visitors securely with a streamlined check-in system.',
    price: 8,
    icon: 'fas fa-id-badge'
  }
];

  selectedAddOns: any[] = [];

  toggleAddOn(addon: any) {
    const index = this.selectedAddOns.indexOf(addon);
    if (index > -1) {
      this.selectedAddOns.splice(index, 1);
    } else {
      this.selectedAddOns.push(addon);
    }
  }

  isSelected(addon: any) {
    return this.selectedAddOns.includes(addon);
  }

  getTotalPrice(): number {
  return this.selectedAddOns.reduce((sum, item) => sum + item.price, 0);
}
}
