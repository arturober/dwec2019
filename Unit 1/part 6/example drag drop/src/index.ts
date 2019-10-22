import { Observable, Observer, of, from, interval, fromEvent } from 'rxjs';
import { take, map, filter, reduce, last, scan, endWith, pluck, skip, skipWhile, delay, concatMap, distinct, distinctUntilChanged, debounceTime, tap, switchMap, takeUntil } from 'rxjs/operators';

let div = document.querySelector<HTMLDivElement>("#div1");
// EVENTS
const mousedown$ = fromEvent<MouseEvent>(div, 'mousedown');
const mousemove$ = fromEvent<MouseEvent>(document, 'mousemove');
const mouseup$ = fromEvent<MouseEvent>(div, 'mouseup');
mousedown$.pipe(
    switchMap((start) => {
        return mousemove$.pipe(
            map(moveEv => {
                moveEv.preventDefault();
                let left = moveEv.clientX - start.offsetX;
                left = Math.max(Math.min(left, window.innerWidth - div.clientWidth), 0);
                let top = moveEv.clientY - start.offsetY;
                top = Math.max(Math.min(top, window.innerHeight - div.clientHeight), 0);
                return { left, top }
            }),
            takeUntil(mouseup$));
    })
).subscribe(pos => {
    div.style.top = `${pos.top}px`
    div.style.left = `${pos.left}px`
});