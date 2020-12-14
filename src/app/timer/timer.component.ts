import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  inputTimer: number = 0;
  timer: number = 0;
  timerSubscription: Subscription;
  progress = '0%';

  constructor() {}

  ngOnInit(): void {}

  startTimer() {
    const source = timer(0, 1000);
    this.timerSubscription = source.subscribe(() => {
      if (this.timer > 0 && this.progress != '100%') {
        console.log(this.timer);
        this.timer = this.timer - 1 / 60;
        this.progress =
          Math.round(100 - (this.timer / this.inputTimer) * 100) + '%';
      } else {
        this.stopTimer();
      }
    });
  }

  stopTimer() {
    alert("Timer stopped");
    if (this.timerSubscription) this.timerSubscription.unsubscribe();
  }

  resetTimer() {
    if (this.timerSubscription) this.timerSubscription.unsubscribe();
    this.timer = this.inputTimer;
    this.progress = '0%';
  }

  onChangeInputTimer() {
    this.timer = this.inputTimer;
    if (this.timerSubscription) this.timerSubscription.unsubscribe();
    this.progress = '0%';
  }
}
