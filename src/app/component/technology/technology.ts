import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface TechStack {
  name: string;
  role: string;
  description: string;
  icon: string;
  gradientFrom: string;
  gradientTo: string;
  glowColor: string;
  borderColor: string;
}

interface Benefit {
  title: string;
  highlight: string;
  description: string;
}

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technology.html',
  styleUrl: './technology.scss'
})
export class Technology {
 techStack: TechStack[] = [
    {
      name: 'Laravel',
      role: 'Backend API',
      description: 'Robust, secure, and scalable server-side architecture with elegant syntax and powerful tools.',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
      gradientFrom: 'from-red-500',
      gradientTo: 'to-orange-600',
      glowColor: 'group-hover:shadow-orange-500/30',
      borderColor: 'group-hover:border-orange-500/50'
    },
    {
      name: 'Angular',
      role: 'Web Frontend',
      description: 'Dynamic, responsive SPA with TypeScript powering enterprise-grade user experiences.',
      icon: 'M12 2L2 19h20L12 2zm0 3.5L17.5 17h-11L12 5.5z',
      gradientFrom: 'from-red-600',
      gradientTo: 'to-pink-600',
      glowColor: 'group-hover:shadow-red-500/30',
      borderColor: 'group-hover:border-red-500/50'
    },
    {
      name: 'Flutter',
      role: 'Mobile Apps',
      description: 'Cross-platform native performance for iOS and Android from a single Dart codebase.',
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
      gradientFrom: 'from-cyan-400',
      gradientTo: 'to-blue-600',
      glowColor: 'group-hover:shadow-cyan-500/30',
      borderColor: 'group-hover:border-cyan-500/50'
    },
    {
      name: 'Cloud',
      role: 'Infrastructure',
      description: '99.9% uptime with auto-scaling, daily backups, and enterprise-grade security protocols.',
      icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
      gradientFrom: 'from-indigo-500',
      gradientTo: 'to-purple-600',
      glowColor: 'group-hover:shadow-indigo-500/30',
      borderColor: 'group-hover:border-indigo-500/50'
    }
  ];

  benefits: Benefit[] = [
    {
      title: 'No IT Headaches:',
      highlight: 'No IT Headaches:',
      description: 'We handle hosting, security, updates, and maintenance.'
    },
    {
      title: 'Automatic Updates:',
      highlight: 'Automatic Updates:',
      description: 'Always access the latest features without extra cost.'
    },
    {
      title: 'Access Anywhere:',
      highlight: 'Access Anywhere:',
      description: 'Secure access from desktop, laptop, or mobile devices.'
    },
    {
      title: 'Data Security:',
      highlight: 'Data Security:',
      description: 'Encrypted, backed up daily, and hosted in secure data centers.'
    }
  ];

  
}
