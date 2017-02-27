import 'jest'
import {
  loadingEndAction,
  loadingStartAction,
} from '../../actions/loadingAction'

describe('loading action', () => {
  it('LOADING_START', () => {
    expect(loadingStartAction()).toEqual({
      type: 'LOADING_START',
    })
  })

  it('LOADING_END', () => {
    expect(loadingEndAction()).toEqual({
      type: 'LOADING_END',
    })
  })
})
