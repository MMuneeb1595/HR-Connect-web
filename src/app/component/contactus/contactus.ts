import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 interface DemoForm {
  fullName: string;
  companyName: string;
  workEmail: string;
  phoneNumber: string;
  employeeCount: string;
  
  interests: {
    payroll: boolean;
    attendance: boolean;
    recruitment: boolean;
    pms: boolean;
    other: boolean;
  };
 }
@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contactus.html',
  styleUrl: './contactus.scss'
})
export class Contactus{
 employeeOptions: string[] = ['1-50', '51-200', '201-500', '500+'];
  
  formData: DemoForm = {
    fullName: '',
    companyName: '',
    workEmail: '',
    phoneNumber: '',
    employeeCount: '1-50',
    interests: {
      payroll: false,
      attendance: false,
      recruitment: false,
      pms: false,
      other: false
    }
  };

  contactInfo = {
    email: 'info@hrconnect.com',
    phone: '+1 (123) 456-7890',
    address: '123 Business Ave, City, State 12345'
  };

  socialLinks = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', url: '#' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: '#' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: '#' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: '#' }
  ];

  onSubmit(): void {
    console.log('Form submitted:', this.formData);
    alert('Demo request submitted successfully!');
  }

  toggleInterest(interest: keyof DemoForm['interests']): void {
    this.formData.interests[interest] = !this.formData.interests[interest];
  }
}
