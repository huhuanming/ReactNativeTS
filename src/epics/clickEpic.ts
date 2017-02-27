import { Observable } from 'rxjs/Rx'
export default (action$: any) => action$.ofType(
  'CLICK',
).buffer(action$.ofType('CLICK').debounceTime(500))
.filter((list: any[]) => list.length === 2)
.switchMapTo(Observable.of({
  type: 'DOUBLE_CLICK',
}))
