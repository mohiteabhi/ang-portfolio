import { Component, ElementRef, AfterViewInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {

  wordList: string[] = ['An Engineer', 'Frontend Developer'];
  wordIndex: number = 0;
  charIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 150;
  erasingSpeed: number = 100;
  delayBetweenWords: number = 1000;
  displayedText: string = '';

  @ViewChild('cardContainer') cardContainer!: ElementRef;
  @ViewChild('downloadButton') downloadButton!: ElementRef;


  constructor() { }

  ngAfterViewInit() {
    this.type();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.cardContainer || !this.downloadButton) return;

    const card = this.cardContainer.nativeElement.querySelector('.card');
    const button = this.downloadButton.nativeElement;

    if (card) {
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (event.clientX - left - width / 2) / 40; // Reduced effect range
        const y = -(event.clientY - top - height / 2) / 40;
        card.style.transform = `rotateY(${x}deg) rotateX(${y}deg) translateZ(30px)`; // Adjusted translateZ for subtle effect
    }

    if (button) {
        const { left, top, width, height } = button.getBoundingClientRect();
        const x = (event.clientX - left - width / 2) / 50; // More reduced effect for button
        const y = -(event.clientY - top - height / 2) / 50;
        button.style.transform = `rotateY(${x}deg) rotateX(${y}deg) translateZ(10px)`;
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (!this.cardContainer || !this.downloadButton) return;

    const card = this.cardContainer.nativeElement.querySelector('.card');
    const button = this.downloadButton.nativeElement;

    if (card) card.style.transform = 'rotateY(0deg) rotateX(0deg) translateZ(0px)';
    if (button) button.style.transform = 'rotateY(0deg) rotateX(0deg) translateZ(0px)';
}

  
  type() {
    const currentWord = this.wordList[this.wordIndex];

    if (!this.isDeleting && this.charIndex < currentWord.length) {
      this.displayedText = currentWord.substring(0, this.charIndex + 1);
      this.charIndex++;
      setTimeout(() => this.type(), this.typingSpeed);
    } 
    else if (this.isDeleting && this.charIndex > 0) {
      this.displayedText = currentWord.substring(0, this.charIndex - 1);
      this.charIndex--;
      setTimeout(() => this.type(), this.erasingSpeed);
    } 
    else if (!this.isDeleting && this.charIndex === currentWord.length) {
      this.isDeleting = true;
      setTimeout(() => this.type(), this.delayBetweenWords);
    } 
    else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.wordList.length;
      setTimeout(() => this.type(), this.typingSpeed);
    }
  }

  



}