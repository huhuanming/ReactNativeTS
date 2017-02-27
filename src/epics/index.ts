import { combineEpics } from 'redux-observable'
import clickEpic from './clickEpic'
import fetchSelectData from './fetchSelectDataEpic'

export default combineEpics(
  clickEpic,
  fetchSelectData,
)
