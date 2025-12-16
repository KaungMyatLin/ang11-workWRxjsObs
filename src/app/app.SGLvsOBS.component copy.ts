// import { Component, computed, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
// import { toObservable, toSignal } from '@angular/core/rxjs-interop';
// import { interval, map } from 'rxjs';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   templateUrl: './app.component.html'
// })
// //observable (values over time) vs signal(values in container)..
// //obs great for managng event x streamed data..
// //signal great for managng application data..
// export class AppComponent implements OnInit{
//   // private desRef = inject (DestroyRef)
//   clickCount = signal(0)

// //signal newer thing..with setInterval..
//   intervalVar = signal(0)
//   doubleIntVar = computed(()=>this.intervalVar()*2) //just like obs.map below..

// //OBS 2 SGL conversion..
// //interval below is OBS operator..
//   int$ = interval(1000)
//   intSGL = toSignal(this.int$,{initialValue:0}) 

// // not w effect watching, now create w obs converted from clickCount SGL..SGL 2 obs..
// //   clickCount$ = toObservable(this.clickCount)
// //   constructor(){
// //     // effect(()=>{
// //     //   console.log(`${this.clickCount()} times`)
// //     // })
// // //above using effect vs below SGL 2 OBS conversion..
// //     const subs = this.clickCount$.subscribe({
// //       next: val => console.log(`${this.clickCount()} times`)
// //     })
// //     this.desRef.onDestroy(()=>{
// //       subs.unsubscribe()
// //     })
// //   }

//   ngOnInit(): void {
// //rxjs like obs below xo obs behaviorSubj before signal is new thing..
//     // const subs = interval(1000).pipe(
//     //   map((val) => val * 2)
//     // ).subscribe({
//     //   next: (everyNewVal) => console.log(everyNewVal),
//     // })
//     // this.desRef.onDestroy(()=>{
//     //   subs.unsubscribe()
//     // })
// //above using effect vs below obs w SGL..
//     // setInterval(()=>{
//     //   this.intervalVar.update(prev => prev+1)//update signal..
//     // })
//   }

//   // onClick(){
//   //   this.clickCount.update(prevCount => prevCount +1)
//   // }
// }
