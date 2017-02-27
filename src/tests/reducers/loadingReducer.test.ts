import {
  loadingEndAction,
  loadingStartAction,
} from '../../actions/loadingAction'
import reducer from '../../reducers/loadingReducer'

const defaultValue: number = 0

describe('loading reducer', () => {
  it('LOADING_START', () => {
    expect(
      reducer(defaultValue, loadingStartAction()),
    ).toEqual(1)
  })
})

describe('loading reducer', () => {
  it('LOADING_START', () => {
    expect(
      reducer(defaultValue, loadingEndAction()),
    ).toEqual(-1)
  })
})
