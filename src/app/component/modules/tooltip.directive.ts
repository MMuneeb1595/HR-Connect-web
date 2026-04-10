import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true
})
export class TooltipDirective {

  @Input() appTooltip = '';

  tooltipElement!: HTMLElement;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.tooltipElement = document.createElement('span');
    this.tooltipElement.innerText = this.appTooltip;

    this.tooltipElement.style.position = 'absolute';
    this.tooltipElement.style.background = '#333';
    this.tooltipElement.style.color = '#fff';
    this.tooltipElement.style.padding = '5px 10px';
    this.tooltipElement.style.borderRadius = '5px';
    this.tooltipElement.style.fontSize = '12px';

    document.body.appendChild(this.tooltipElement);

    const rect = this.el.nativeElement.getBoundingClientRect();
    this.tooltipElement.style.top = rect.top - 30 + 'px';
    this.tooltipElement.style.left = rect.left + 'px';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.tooltipElement.remove();
  }
}