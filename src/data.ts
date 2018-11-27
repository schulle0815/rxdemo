import {interval, Observable, of} from 'rxjs';
import {filter, flatMap, map, merge, switchMap, take, tap, zip} from 'rxjs/operators';

console.log('test');

let data = ['One', 'Two', 'Three', 'Four', 'Five'];
let data2 = ['One', 'Two', 'Three', 'Four', 'Five'];
let data3 = ['A', 'B', 'C', 'D', 'E'];

// rx chain
let o = of(...data);
o.pipe(map(d => d + ':')).pipe(filter(d => d !== 'Two:')).pipe(tap(d => console.log(d))).subscribe();

// rx to promise conversion
let p = of(...data);
p.pipe(map(d => d + ':'))
    .pipe(filter(d => d !== 'Two:'))
    .pipe(tap(d => console.log(d)))
    .toPromise()
    .then(() => console.log('Promise success!'));

let o1 = of(...data2);
let o2 = of(...data3);

o1.pipe(zip(o2)).subscribe(d => console.log(d));

o1.pipe(merge(o2)).subscribe(d => console.log(d));
