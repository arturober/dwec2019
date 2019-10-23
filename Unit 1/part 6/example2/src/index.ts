import { Observable, Observer, of, from, interval, fromEvent, partition, Subject, ConnectableObservable } from 'rxjs';
import { take, map, filter, reduce, last, scan, endWith, pluck, skip, skipWhile, delay, concatMap, distinct, distinctUntilChanged, debounceTime, tap, switchMap, pairwise, skipUntil, takeUntil, sample, mergeMap, repeatWhen, buffer, bufferCount, bufferTime, window, count, combineAll, concatAll, retry, multicast, refCount, share } from 'rxjs/operators';

// interval(500).pipe(
//     skipUntil(interval(3000).pipe(take(1)))
// ).subscribe(console.log);

// const click$ = fromEvent(document, 'click');

// interval(500).pipe(
//     skipUntil(click$),
//     take(5)
// ).subscribe(x => console.log(x));

// interval(500).pipe(
//     takeUntil(click$),
// ).subscribe(x => console.log(x));

// interval(500).pipe(
//     sample(fromEvent(document, 'click'))
// ).subscribe(v => console.log(v));

// interval(200).pipe(
//     take(5),
//     concatMap(v => [v, v*2, v*3])
// ).subscribe(console.log);

// let click$ = fromEvent(document, 'click').pipe(
//     concatMap(e => interval(300).pipe(take(4)))
// ).subscribe(v => console.log(v));

// let click$ = fromEvent(document, 'click').pipe(
//     switchMap(e => interval(300).pipe(take(4)))
// ).subscribe(v => console.log(v));

// let click$ = fromEvent(document, 'click').pipe(
//     mergeMap(e => interval(300).pipe(take(4)))
// ).subscribe(v => console.log(v));

// of(1, 2, 3).pipe(
//     repeatWhen(()=> interval(1000).pipe(take(5))),
// ).subscribe(n => console.log(n));   

// interval(200).pipe(
//     buffer(fromEvent(document, 'click')),
// ).subscribe(
//     array => console.log(array)
// )

// interval(200).pipe(
//     take(33),
//     bufferCount(5),
// ).subscribe(
//     array => console.log(array)
// )

// interval(200).pipe(
//     take(33),
//     bufferTime(1000),
// ).subscribe(
//     array => console.log(array)
// )

// interval(200).pipe(
//     window(fromEvent(document, 'click')),
//     switchMap(obs => obs.pipe(count())) // How many values emitted until click
// ).subscribe(
//     array => console.log(array)
// )

// const interval1$ = interval(1000).pipe(map(n => `Int 1: ${n}`));
// const interval2$ = interval(500).pipe(map(n => `Int 2: ${n}`));
// of(interval1$, interval2$).pipe(
//     combineAll(),
//     take(10)
// ).subscribe(
//     ([v1, v2]) => console.log(`${v1} - ${v2}`)
// );

// const interval1$ = interval(1000).pipe(map(n => `Int 1: ${n}`), take(3));
// const interval2$ = interval(500).pipe(map(n => `Int 2: ${n}`), take(3));

// of(interval1$, interval2$).pipe(
//     concatAll()
// ).subscribe(
//     v => console.log(v)
// );

let words = ['horse', 'camel', 'house', 'canary', 'hope', 'elephant', 'melon'];
let ul = document.getElementById("results") as HTMLUListElement;
fromEvent(document.getElementById("search"), 'keyup').pipe(
    map(event => (event.target as HTMLInputElement).value),
    debounceTime(500),
    distinctUntilChanged(),
    tap(s => {
        while (ul.firstChild)
            ul.removeChild(ul.firstChild);
    }),
    map(search => words.filter(w => w.includes(search))),
    tap(words => console.log(words)),
    switchMap(words => words),
    map(w => {
        const li = document.createElement("li");
        li.innerText = w;
        return li;
    })
).subscribe(result => {
    ul.appendChild(result);
});

// interval(200).pipe(
//     map(n => {
//         if (n > 3) throw 'Number greater than 3!';
//         return `Number: ${n}`;
//     }),
//     retry(2),
// ).subscribe(
//     v => console.log(v),
//     e => console.log(e)
// );

// let obs$ = new Observable<number>(observer => {
//     let v = 1;
//     let int = setInterval(() => {
//         observer.next(v++);
//         if (observer.closed) { // Unsuscribed
//             clearInterval(int);
//         }
//     }, 1000);
// });
// obs$.pipe(take(5)).subscribe(v => console.log("Observer 1: " + v));
// setTimeout(
//     () => obs$.pipe(take(5)).subscribe(v => console.log("Observer 2: " + v)), 
//     2000);


// let sub$ = new Subject<number>();
// let v = 1;
// let int = setInterval(() => {
//     sub$.next(v++);
//     if (v > 10) {
//         sub$.complete();
//         clearInterval(int);
//     }
// }, 1000);

let sub$ = interval(1000).pipe(
    take(10),
    share()
) as ConnectableObservable<number>;

sub$.subscribe(v => console.log("Observer 1: " + v));
setTimeout(() => sub$.subscribe(v => console.log("Observer 2: " + v)), 4000);
setTimeout(() => sub$.subscribe(v => console.log("Observer 3: " + v)), 11000);
