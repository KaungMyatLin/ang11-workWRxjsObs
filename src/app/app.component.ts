import { Component, computed, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
//observable (values over time) vs signal(values in container)..
//obs great for managng event x streamed data..
//signal great for managng application data..
export class AppComponent implements OnInit{
  clickCount = signal(0)
//build OBS from groundup..
//wo any subscriber xo til .subscribe.. no event xo val is emitted..
  customInt$ = new Observable((suber)=> {
    let timeExec = 0
    const int = setInterval(()=>{
      if (timeExec > 2) {
        clearInterval(int)
        suber.complete()
        return
      }
      suber.next({xyz: 'New Val', opq: 1})
      timeExec++;
    },2000)
  })
  ngOnInit(): void {
    this.customInt$.subscribe({
      next: val => console.log(val),
      complete: () => console.log("onComple final msg"),
      error: err => console.log(err)
    })
  }
  
  onClick(){
    this.clickCount.update(prevCount => prevCount +1)
  }
}
