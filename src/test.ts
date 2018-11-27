import {interval, Observable, of} from 'rxjs';
import {flatMap, map, switchMap, take, tap} from 'rxjs/operators';

console.log('test');

let o = interval(2000).pipe(take(5));
//.pipe(tap(d => console.log("Interval!")));
o.subscribe(d => console.log('Event 1!'));
o.subscribe(d => console.log('Event 2!'));
