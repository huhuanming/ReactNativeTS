import * as React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

// See src/declarations.d.ts
import Button from 'react-native-button'

import { fetchWXIndustry } from '../../actions/fetchSelectDataAction'

interface Props extends React.Props<any> {
    max: number
    message?: string | number
    alert?: string | number
    style: React.ViewStyle
}

interface State {
    counter: number
}

interface ClassProps {
  fetchWXIndustry: any
  temp: any
}

export class HelloWorld extends React.Component<ClassProps & Props, State> {
    static defaultProps = {
        alert: 'Hello world!',
        message: 'Press here',
    }

    state = {
        counter: 0,
    }

    onPress = () => {
        const counter = this.state.counter + 1
        if (counter < this.props.max) {
            return this.setState({ counter })
        }
        // Alert after re-rendering
        return this.setState({ counter: 0 }, () => alert(this.props.alert))
    }

    fetchData = () => {
      this.props.fetchWXIndustry()
    }

    render() {
        const { message } = this.props
        const { counter } = this.state

        return (
            <View style={this.props.style}>
                <Button onPress={this.onPress}>
                    {message} ({counter})
                </Button>
                <Button onPress={this.fetchData}>
                    {'fetch data'}
                </Button>
            </View>
        )
    }
}

const mapStateToProps = (state: any) => ({
  temp: state.temp,
})

const mapDispatchToProps = {
  fetchWXIndustry,
}

export default connect<{}, {}, Props>(mapStateToProps, mapDispatchToProps)(HelloWorld)
