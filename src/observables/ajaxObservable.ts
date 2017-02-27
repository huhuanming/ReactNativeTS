import { stringify } from 'query-string'
import { Observable } from 'rxjs/Rx'
import {
  AjaxError,
  AjaxResponse,
  AjaxTimeoutError,
} from 'rxjs/observable/dom/AjaxObservable'
import {
  loadingEndAction,
  loadingNetworkError,
  loadingStartAction,
  loadingTimeoutError,
} from '../actions/loadingAction'

enum Method {'GET', 'POST', 'PUT', 'DELETE'}

interface AjaxSettingInterface {
  host?: string
  endponit?: string
  queryParams?: Object
  body?: any
  method?: Method
  headers?: Object
  timeout?: number
  crossDomain?: boolean
  withCredentials?: boolean
  responseType?: string
}

declare class MHBody extends Error {
  /** @type {string|ArrayBuffer|Document|object|any} The response data */
  // tslint:disable-next-line variable-name
  public result_body: any

  /** @type {string} The result status code */
  // tslint:disable-next-line variable-name
  public result_code: string

  /** @type {string} The result message */
  // tslint:disable-next-line variable-name
  public result_msg: string

  /** @type {string} The HTTP status code */
  // tslint:disable-next-line variable-name
  public status_code: string

  constructor(
    // tslint:disable-next-line variable-name
    result_body: any,
    // tslint:disable-next-line variable-name
    result_code: number,
    // tslint:disable-next-line variable-name
    result_msg: string,
    // tslint:disable-next-line variable-name
    status_code: string,
  )
}

const defaultHost = '//ojxsui5xm.bkt.clouddn.com'
const defaultHeaders = {
  'content-type': 'application/json',
}
const defaultMethod = 'GET'
const defaultTimeout = 10000
const defaultResponseType = 'json'

export default (ajaxSetting: AjaxSettingInterface, actionCalled: (body: MHBody) => any ) => Observable.concat(
  Observable.of(loadingStartAction()),
  Observable.ajax({
    body: ajaxSetting.body ? JSON.stringify(ajaxSetting.body) : undefined,
    crossDomain: true,
    headers: ajaxSetting.headers ? ajaxSetting.headers : defaultHeaders,
    method: String(ajaxSetting.method ? ajaxSetting.method : defaultMethod),
    responseType: ajaxSetting.responseType ? ajaxSetting.responseType : defaultResponseType,
    timeout: ajaxSetting.timeout ? ajaxSetting.timeout : defaultTimeout,
    url: `${
      ajaxSetting.host ? ajaxSetting.host : defaultHost
    }${
      ajaxSetting.endponit
    }${
      ajaxSetting.queryParams ? `?${stringify(ajaxSetting.queryParams)}` : ''
    }`,
    withCredentials: !!ajaxSetting.withCredentials,
  })
  .switchMap((ajaxResponse: AjaxResponse) => {
    const body: MHBody = ajaxResponse.response
    return Observable.concat(
      Observable.of(loadingEndAction()),
      Observable.of(actionCalled(body)),
    )
  }).catch((error: any) => {
    if (error instanceof AjaxError) {
      console.log(error)
      return Observable.merge(
        Observable.of(loadingEndAction()),
        Observable.of(loadingNetworkError()),
      )
    }

    if (error instanceof AjaxTimeoutError) {
        return Observable.merge(
          Observable.of(loadingEndAction()),
          Observable.of(loadingTimeoutError()),
        )
    }

    return Observable.merge(
      Observable.of(loadingEndAction()),
      Observable.throw(error),
    )
  }),
)
