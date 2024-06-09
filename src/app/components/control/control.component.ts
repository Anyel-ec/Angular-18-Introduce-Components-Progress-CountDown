// Importamos las dependencias necesarias de Angular
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CountdownComponent } from '../countdown/countdown.component';
@Component({// Definimos el componente con su selector, template y estilos
  selector: 'app-control',
  standalone: true,
  imports: [CountdownComponent],
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
// Definimos la clase del componente
export class ControlComponent  {
  @ViewChild(CountdownComponent) countdown!: CountdownComponent;
  isPaused: boolean = false;
  // Método para alternar entre pausar y reanudar el contador
  togglePauseResume() {
    if (this.isPaused) {      this.resume();
    } else {      this.pause();

    }
    this.isPaused = !this.isPaused;
  }
  // Método para pausar el contador
  pause() {
    if (this.countdown) {this.countdown.clearTimeOutRef();
      // Llamamos al método clearTimeOutRef
      //para pausar el contador
    }
  }
  // Método para reanudar el contador
  resume() {if (this.countdown) { // Verificamos que haya una referencia al componente de Countdown
      this.countdown.doCountdown(); // Llamamos al método doCountdown para reanudar el contador
    }
  }
}
