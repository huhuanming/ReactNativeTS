import { Observable } from 'rxjs/Rx'
import { reciveWXIndustry } from '../actions/fetchSelectDataAction'
import ajaxObservable from '../observables/ajaxObservable'

export default (action$: any) => action$.ofType(
  'FETCH_WX_INDUSTRY',
).switchMap(() =>
  ajaxObservable(
    {
      endponit: '/json/wx_industry.json',
      headers: {},
      host: 'http://ojxsui5xm.bkt.clouddn.com',
      withCredentials: false,
    },
    (body) => reciveWXIndustry(body),
  ),
).catch((error: any): Observable<any> => {
  console.log(error)
  return Observable.of({
     type: 'TEST_END',
  })
})
