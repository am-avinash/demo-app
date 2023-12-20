import { Directive, ElementRef, HostListener , Input} from '@angular/core';

@Directive({
  selector: '[appDemoDirective]'
})
export class DemoDirectiveDirective {

  @Input() textColor = String;

  constructor(private elementRef: ElementRef) {}


  ngOnInit(): void{
    this.elementRef.nativeElement.style.color= this.textColor;
  }


  @HostListener('mouseenter') onMouseEnter(){
    this.elementRef.nativeElement.style.color = this.textColor;
  }

  
  @HostListener('mouseleave') onMouseLeave(){
    this.elementRef.nativeElement.style.color = 'black';
  }
  }






