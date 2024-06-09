import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { ControlComponent } from './components/control/control.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProgressBarComponent, CountdownComponent,
     ControlComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'components';
  counterProgress: number = 0;
  totalCountdown: number = 5;
  @ViewChild('countdown') countdownComponent!: CountdownComponent;

  updateProgress(event: number) {
    this.counterProgress = (this.totalCountdown - event) / this.totalCountdown * 100;
  }

  countdownFinished() {
    console.log("Countdown Finished");
  }
}
