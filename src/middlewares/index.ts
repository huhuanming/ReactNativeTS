import {
  applyMiddleware,
  compose,
  createStore as createStoreAction,
} from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import epics from '../epics'
import reducers from '../reducers'

export default (): any => {
  const enhancer = compose(
    applyMiddleware(
      createEpicMiddleware(epics),
    ),
    // tslint:disable-next-line:no-string-literal
    global['reduxNativeDevTools'] ? global['reduxNativeDevTools']() : (nope: any) => nope as any,
  )

  const store = createStoreAction(reducers, undefined, enhancer)
  return store
}
