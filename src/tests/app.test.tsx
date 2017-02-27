import { shallow } from 'enzyme'
import 'jest'
import * as react from 'react'
import * as React from 'react'
import { View } from 'react-native'
import Button from 'react-native-button'
import { HelloWorld } from '../components/HelloWorld/index'

const props = {
  fetchWXIndustry: jest.fn(),
  temp: '',
  max: 0,
  style: {},
}

describe('App', () => {
  it('renders without crashing', () => {
    const enzymeWrapper = shallow(<HelloWorld {...props} /> as react.ReactElement<View>)
    const buttons = enzymeWrapper.find(Button)
    buttons.at(1).simulate('press')
    expect(props.fetchWXIndustry.mock.calls.length).toBe(1)
    buttons.at(1).simulate('press')
    expect(props.fetchWXIndustry.mock.calls.length).toBe(2)
  })
})
