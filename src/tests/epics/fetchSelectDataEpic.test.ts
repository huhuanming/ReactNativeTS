import 'jest'
import configureMockStore from 'redux-mock-store'
import { createEpicMiddleware } from 'redux-observable'
import { Observable } from 'rxjs/Rx'

import {
  loadingEndAction,
  loadingStartAction,
} from '../../actions/loadingAction'
import fetchSelectDataEpic from '../../epics/fetchSelectDataEpic'
import * as ajaxObservable from '../../observables/ajaxObservable'

const epicMiddleware = createEpicMiddleware(fetchSelectDataEpic)
const mockStore = configureMockStore([epicMiddleware])

describe('fetchSelectDataEpic', () => {
  let store: any

  beforeEach(() => {
    store = mockStore()
  })

  afterEach(() => {
    epicMiddleware.replaceEpic(fetchSelectDataEpic)
  })

  it('fetch weixin industry', () => {
    const payload = [
      {
        children:
        [
          {
            children:
            [
              {
                label: '餐饮',
                value: '153',
              },
            ],
            label: '餐饮/食品',
            value: '餐饮/食品',
          },
        ],
        label: '个体工商户',
        value: '个体工商户',
      },
    ]
    spyOn(ajaxObservable, 'default').and.callFake(
      (setting: any, actionCreated: any) => Observable.concat(
        Observable.of(loadingStartAction()),
        Observable.of(actionCreated(payload)),
        Observable.of(loadingEndAction()),
      ),
    )
    store.dispatch({ type: 'FETCH_WX_INDUSTRY' })
    expect(store.getActions()).toEqual([
      { type: 'FETCH_WX_INDUSTRY' },
      { type: 'LOADING_START'},
      { type: 'Recive_WX_INDUSTRY', payload: { industrys: payload } },
      { type: 'LOADING_END'},
    ])
  })
})
