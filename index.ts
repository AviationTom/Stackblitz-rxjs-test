import { of, Observable } from 'rxjs'; 
import { map } from 'rxjs/operators';

import { fromEvent } from 'rxjs';
import { throttleTime, scan, mapTo } from 'rxjs/operators';

/*
const clicks1 = fromEvent(document.getElementById("btn1"), 'click');
const clicks2 = fromEvent(document.getElementById("btn2"), 'click');
const ones1 = clicks1.pipe(mapTo(1));
const ones2 = clicks2.pipe(mapTo(-1));

const count = ones1.pipe(scan((acc, curr) => (acc + curr)));
count.subscribe(x => console.log(x))
*/

/*
const observable = new Observable(subscriber => {
  subscriber.next(1);
  setTimeout(() => {
    subscriber.next(2);
  }, 1000);
  setTimeout(() => {
    subscriber.next(3);
  }, 2000);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 3000);
});

//observable.subscribe(x => console.log(x))

console.log('just before subscribe');
observable.subscribe({
  next(x) { console.log('got value ' + x); },
  error(err) { console.error('something wrong occurred: ' + err); },
  complete() { console.log('done'); }
});
console.log('just after subscribe');
*/ 


const observable = new Observable(function subscribe(subscriber) {
  const id = setInterval(() => {
    subscriber.next('hi')
  }, 1000);
});

// observable.subscribe(x => console.log(x))
observable.subscribe(function bla(foo){console.log(foo)})