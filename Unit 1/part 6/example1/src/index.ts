import { Observable, Observer, of, from, interval, fromEvent, partition } from 'rxjs';
import { take, map, filter, reduce, last, scan, endWith, pluck, skip, skipWhile, delay, concatMap, distinct, distinctUntilChanged, debounceTime, tap, switchMap, pairwise } from 'rxjs/operators';

// let obs$ = new Observable<number>(observer => {
//     observer.next(3);
//     observer.next(11);
//     observer.next(7);
//     observer.complete();
// });

// let obs$ = new Observable<number>(observer => {
//     let i = 0;
//     let interval = setInterval(() => {
//         observer.next(Math.floor(Math.random() * 10));
//         i++;
//         if(i >= 5) {
//             observer.complete();
//             clearInterval(interval);
//         }
//     }, 1000);
// });

// let obs$ = of<number>(0, 1, 2, 3, 4);

// let obs$ = from([0, 1, 2, 3, 4]);

// let obs$ = from<NodeListOf<HTMLOptionElement>>(document.querySelectorAll("#select option"));

// obs$.subscribe({
//     next: elem => console.log(`Value: ${elem.value}, text: ${elem.innerText}`),
//     complete: () => console.log("Completed!")
// });

// obs$.subscribe(elem => console.log(`Value: ${elem.value}, text: ${elem.innerText}`);

// let subscription = interval(1000).subscribe(v => {
//     console.log(v);
//     if(v > 9) subscription.unsubscribe();
// });

// let subscription = interval(1000).pipe(
//     take(10)
// ).subscribe({
//     next: v => console.log(v),
//     complete: () => console.log("Completed!")
// });

// fromEvent(document, 'click').subscribe(e => console.log(e));

// interval(1000).pipe(
//     map(v => v * 2),
//     take(5)
// ).subscribe(
//     v => console.log(v)
// );

// of('Apple', 'Tree', 'Anthony', 'Charles', 'Mouse').pipe(
//     filter(w => w.startsWith('A'))
// ).subscribe(w => console.log(w));

// interval(200).pipe(
//     take(10),
//     map(n => (n + 1) * 100),
//     reduce<number, number[]>((accum, n) => [...accum, n], [])
// ).subscribe(
//     result => console.log(result) // 2 seconds later receives the accumulated value
// );

// interval(200).pipe(
//     take(10),
//     reduce((last, n) => n)
// ).subscribe(
//     result => console.log(result) // 2 seconds later receives the accumulated value
// );


// interval(200).pipe(
//     take(10),
//     map(n => (n + 1) * 100),
//     scan<number, number[]>((accum, n) => [...accum, n], [])
// ).subscribe(
//     result => console.log(result) // 2 seconds later receives the accumulated value
// );

// interval(500).pipe(
//     take(5),
//     endWith(99, 100)
// ).subscribe(v => console.log(v));

// let objs = [
//     {
//         name: "chair",
//         price: 46
//     },
//     {
//         name: "table",
//         price: 120
//     }
// ]

// from(objs).pipe(
//     pluck('name')
// ).subscribe(v => console.log(v));

// interval(200).pipe(
//     skip(5),
//     take(5),
//     reduce((total, n) => total + n, 0)
// ).subscribe(v => console.log(v));

// interval(200).pipe(
//     skipWhile(n => (n+1) % 3 != 0),
//     take(5),
//     reduce((total, n) => total + n, 0)
// ).subscribe(v => console.log(v));

// interval(200).pipe(
//     delay(2000),
//     take(5)
// ).subscribe(v => console.log(v));

// of(1, 1, 3, 3, 3, 2, 2, 1, 3, 2).pipe(
//     concatMap(x => of(x).pipe(delay(1000))),
//     distinct()
// ).subscribe(
//     n => console.log(n) // 1 3 2
// )

// of(1, 1, 3, 3, 3, 2, 2, 1, 3, 2).pipe(
//     concatMap(x => of(x).pipe(delay(1000))),
//     distinctUntilChanged()
// ).subscribe(console.log)


// fromEvent<MouseEvent>(document, 'click').pipe(
//     pairwise(),
//     map(pair => {
//         const x0 = pair[0].clientX;
//         const y0 = pair[0].clientY;
//         const x1 = pair[1].clientX;
//         const y1 = pair[1].clientY;
//         return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
//     }),
// ).subscribe(x => console.log(x));

const [pair$, odd$] = partition<number>(interval(500), (v, i) => v % 2 === 0);
pair$.subscribe(
    v => console.log("Pair: " + v)
);
odd$.subscribe(
    v => console.log("Odd: " + v)
);
