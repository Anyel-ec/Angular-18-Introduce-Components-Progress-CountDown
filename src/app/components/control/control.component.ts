import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CountdownComponent } from '../countdown/countdown.component';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [CountdownComponent],
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent  {
  @ViewChild(CountdownComponent) countdown!: CountdownComponent;
  isPaused: boolean = false;

  togglePauseResume() {
    if (this.isPaused) {
      this.resume();
    } else {
      this.pause();
    }
    this.isPaused = !this.isPaused;
  }

  pause() {
    if (this.countdown) {
      this.countdown.clearTimeOutRef();
    }
  }

  resume() {
    if (this.countdown) {
      this.countdown.doCountdown();
    }
  }
}
