import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-industry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './industry.html',
  styleUrl: './industry.scss'
})
export class Industry {
  industries = [
    { title: 'Retail & E-commerce', icon: 'fas fa-shopping-cart', description: 'Manage high-volume hourly workers, track attendance across multiple store locations, and simplify shift-based payroll.' },
    { title: 'Manufacturing & Logistics', icon: 'fas fa-industry', description: 'Track shop floor attendance with biometric integration, manage overtime calculations, and handle incident reporting for workplace safety.' },
    { title: 'Professional Services', icon: 'fas fa-laptop-code', description: 'Empower consultants with mobile self-service, track project-based leave, and manage expense claims for travel.' },
    { title: 'Healthcare', icon: 'fas fa-notes-medical', description: 'Manage complex shift schedules for doctors and nurses, track continuing education, and ensure compliance with healthcare regulations.' },
    { title: 'Local Businesses', icon: 'fas fa-store', description: 'Simple, intuitive interface for small business owners. Manage your team without an HR degree.' }
  ];
}
