import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnChanges {
  @Input() init: number = 0;
  public counter: number = 0;


  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();



  private countDownTimeRef: any = null;

  ngOnInit(): void {
    this.startCounter();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.startCounter();
  }

  startCounter() {
    if (this.init && this.init > 0) {
      this.clearTimeOutRef();
      this.counter = this.init;
      this.doCountdown();
    }
  }

  doCountdown() {
    this.countDownTimeRef = setTimeout(() => {
      this.counter = this.counter - 1;
      this.processCountdown();
    }, 1000);
  }

  clearTimeOutRef() {
    if (this.countDownTimeRef) {
      clearTimeout(this.countDownTimeRef);
      this.countDownTimeRef = null;
    }
  }

  processCountdown() {
    this.onDecrease.emit(this.counter);
    if (this.counter === 0) {
      this.onComplete.emit();
    } else {
      this.doCountdown();
    }
  }
}
