import { fromEvent } from 'rxjs';
import { takeUntil, mergeMap } from 'rxjs/operators';

const canvas = document.querySelector<HTMLCanvasElement>('#myCanvas');
const ctx = canvas.getContext('2d');
let infiniteX = Infinity;
let infiniteY = Infinity;
let colorHue = 0;

function initialize() {
    canvas.width = window.innerWidth - 20;
    canvas.height = window.innerHeight - 20;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 70;
}

initialize();

function paint({ clientX, clientY }: MouseEvent) {
    ctx.strokeStyle = `hsl(${colorHue}, 100%, 60%)`;
    ctx.beginPath();
    if (Math.abs(infiniteX - clientX) < 100 && Math.abs(infiniteY - clientY) < 100) {
        ctx.moveTo(infiniteX, infiniteY);
    }
    ctx.lineTo(clientX, clientY);
    ctx.stroke();
    infiniteX = clientX;
    infiniteY = clientY;
    colorHue++;
}

const move$ = fromEvent<MouseEvent>(document, 'mousemove');
const down$ = fromEvent<MouseEvent>(document, 'mousedown');
const up$ = fromEvent<MouseEvent>(document, 'mouseup');

down$.pipe(
    mergeMap(down => move$.pipe(takeUntil(up$)))
).subscribe(paint);