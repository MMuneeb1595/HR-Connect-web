import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface ResourceItem {
  title: string;
  items: string[];
}
@Component({
  selector: 'app-resourse',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './resourse.html',
  styleUrl: './resourse.scss'
})
export class Resourse {
//  activeTab = 0;
//   tabs: string[] = ['All', 'Blog', 'Case Studies', 'eBooks', 'Webinars'];
  
//   blogItems: string[] = [
//     '5 Ways to Reduce Employee Absenteeism',
//     'How to Run Paperless Appraisals',
//     'HR Trends for 2024'
//   ];
  
//   caseStudies: string[] = [
//     'Retail Chain: Saved 20 Hours/Week on Payroll',
//     'Manufacturer: Digitized Shop Floor Attendance'
//   ];
  
//   ebooks: string[] = [
//     'The Complete Guide to Moving HR to the Cloud'
//   ];
  
//   webinars: string[] = [
//     'Live Demos',
//     'Q&A Sessions'
//   ];

   resources: ResourceItem[] = [
    {
      title: 'Blog',
      items: [
        '5 Ways to Reduce Employee Absenteeism',
        'How to Run Paperless Appraisals',
        'HR Trends for 2024'
      ]
    },
    {
      title: 'Case Studies',
      items: [
        'How Saved 20 Hours/Week on Payroll',
        'How Digitized Shop Floor Attendance'
      ]
    },
    {
      title: 'eBooks',
      items: [
        'The Complete Guide to Moving HR to the Cloud'
      ]
    },
    {
      title: 'Webinars',
      items: [
        'Live demos and Q&A sessions.'
      ]
    }
  ];

  getIcon(title: string): string {
    const icons: { [key: string]: string } = {
      'Blog': 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z',
      'Case Studies': 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      'eBooks': 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      'Webinars': 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
    };
    return icons[title] || '';
  }
}
