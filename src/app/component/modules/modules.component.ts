import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
//import { TooltipDirective } from './tooltip.directive';
import { OnInit } from '@angular/core';
interface Module {
  title: string;
  description: string;
  icon: string;
}
@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './modules.component.html',
  styleUrl: './modules.component.scss'
})
export class ModulesComponent implements OnInit {
  ngOnInit(): void {
    // your code here 
  }
  radius = 200;
  activeItem: Module | null = null;

  modules = [
    { title:'Dashboard & Analytics',icon:'fas fa-chart-line',description:'Real-time visibility into attendance,approvals, and key HR metrics.'},
    { title: 'Employee Management', icon:'fas fa-users',description:'Centralized employee profiles with documents,history,and personal info.'},
    { title: 'Attendance System', icon: 'fas fa-clock', description: 'Web + mobile marking, geo-location tracking, biometric integration.' },
    { title: 'Leave Management', icon: 'fas fa-calendar-check', description:'Configurable leave types, balance tracking, approval hierarchy.'},
    { title: 'Approvals Workflow', icon: 'fas fa-check-circle', description: 'Unified system for attendance, leave, and travel approvals.' },
    { title: 'Task Management', icon: 'fas fa-tasks', description: 'Create, assign, and track team tasks with progress status.' },
    { title: 'Loan Management', icon: 'fas fa-hand-holding-usd', description: 'Digital loan requests, EMI tracking, and loan ledger reports.' },
    { title: 'Payroll Module', icon: 'fas fa-money-bill-wave', description: 'Automated salary calculation, deductions, and digital payslips' },
    { title: 'Travel Management', icon: 'fas fa-plane', description: 'Travel requests, itineraries, and expense claim submissions.' },
    {title:'Recruitment Management',icon:'fas fa-user-plus',description:'Job posting,candidate tracking,interview scheduling,hiring workflows.'},
    { title: 'PMS', icon: 'fas fa-chart-bar', description: 'KPI definition, scoring, ratings, and paperless appraisals.'},
    { title: 'Incident Management', icon: 'fas fa-exclamation-triangle', description:'Report incidents, track resolution, and analyze trends.'},
    { title: 'Visitors', icon: 'fas fa-id-badge', description: 'Digital visitor check-in/out, pre-registration, host notifications.'},
    { title: 'User', icon: 'fas fa-user-cog', description: 'Centralized user lists and role assignments.'},
    { title: 'Roles & Permissions', icon: 'fas fa-lock', description: 'Granular access control per employee or role.'},
    { title: 'Reports Engine', icon: 'fas fa-file-alt', description: 'Customizable reports: Leave, Loan Ledger, Salary Summary, and more.'}
  ];

  defaultItem: Module = this.modules[0];

  get displayItem(): Module {
    return this.activeItem ?? this.defaultItem;
  }
  selectItem(item: Module) {
    this.activeItem = item;
  }
  
  getPosition(index: number): { [key: string]: string } {
  const width = window.innerWidth;
  if (width < 480) {
    this.radius = 120;
  } else if (width < 768) {
    this.radius = 150;
  } else if (width < 1024) {
    this.radius = 180;
  } else {
    this.radius = 220;
  }

  const total = this.modules.length;
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  // 🔹 Use dynamic radius instead of fixed value
  const x = Math.cos(angle) * this.radius;
  const y = Math.sin(angle) * this.radius;
  return {
    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
    top: '50%',
    left: '50%',
  };
}
}
