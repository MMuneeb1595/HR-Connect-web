import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// ✅ Chart Imports
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, Chart, registerables } from 'chart.js';
// ✅ Register Chart.js
Chart.register(...registerables);

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule,NgChartsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  // 📊 Attendance Chart
  attendanceChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Present',
        data: [34, 48, 50, 46, 52],
        backgroundColor: '#3b82f6',
        borderRadius: 6
      },
      {
        label: 'Absent',
        data: [14, 5, 10, 7, 10],
        backgroundColor: '#ef4444',
        borderRadius: 6
      }
    ]
  };

  attendanceChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: '#374151' }
      }
    },
    scales: {
      x: {
        ticks: { color: '#6b7280' },
        grid: { display: false }
      },
      y: {
        ticks: { color: '#6b7280' },
        grid: { color: '#e5e7eb' }
      }
    }
  };

  // 📋 Pending Approvals
  approvals = [
    {
      title: 'Leave Request',
      name: 'Ali Khan',
      time: '2 hrs ago'
    },
    {
      title: 'Task Approval',
      name: 'Sara Ahmed',
      time: '5 hrs ago'
    },
    {
      title: 'Expense Approval',
      name: 'Usman Tariq',
      time: '1 day ago'
    }
  ];

  // 🎂 Birthdays
  birthdays = [
    {
      name: 'M Tayyab',
      role: 'Frontend Dev',
      img: 'https://i.pravatar.cc/40?img=1'
    },
    {
      name: 'Ayesha Noor',
      role: 'HR Manager',
      img: 'https://i.pravatar.cc/40?img=2'
    },
    {
      name: 'Bilal Ahmed',
      role: 'Backend Dev',
      img: 'https://i.pravatar.cc/40?img=3'
    }
  ];


   stats = [
    {
      icon: 'assets/images/busines.png', // example icon
      value: '5,000+',
      label: 'Businesses'
    },
    {
      icon: 'assets/images/employe.png',
      value: '25,000+',
      label: 'Employees'
    },
    {
      icon: 'assets/images/industry.png',
      value: '50+',
      label: 'Industries'
    }
  ];

}
