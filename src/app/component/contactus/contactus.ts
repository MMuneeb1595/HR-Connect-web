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
  imports: [CommonModule, FormsModule],
  templateUrl: './contactus.html',
  styleUrl: './contactus.scss'
})
export class Contactus {
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
    email: 'info@invictussolutions.co',
    phone: '+92 (041) 2408084',
    address: '18-Z-J, near Madina Hotel, opposite Marine Group Plaza, Madina Town, Faisalabad'
  };
  get mapUrl(): string {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.contactInfo.address)}.Invictus Solutions (Development Office)`;
  }

  socialLinks = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://x.com/' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/' }
  ];

  onSubmit(): void {
    if (
      this.formData.fullName === '' &&
      this.formData.companyName === '' &&
      this.formData.phoneNumber === '' &&
      this.formData.workEmail === '' 
    ) {
      alert('All fields are empty');
    }

    console.log('Form submitted:', this.formData);
    this.formData.fullName = '';
    this.formData.companyName = '';
    this.formData.workEmail = '';
    this.formData.phoneNumber = '';
    alert('Demo request submitted successfully!');

  }

  toggleInterest(interest: keyof DemoForm['interests']): void {
    this.formData.interests[interest] = !this.formData.interests[interest];
  }
}
