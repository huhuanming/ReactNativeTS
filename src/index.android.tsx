import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'

import HelloWorld from './components/HelloWorld/index'
import createStore from './middlewares'

interface Props {

}

interface State {

}

const store = createStore()

export default class App extends React.Component<Props, State> {
    render() {
        return (
          <Provider store={store}>
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Shake or press menu button for dev menu
                </Text>

                <HelloWorld style={styles.helloworld} max={10} />
            </View>
          </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    } as React.ViewStyle,

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    } as React.TextStyle,

    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    } as React.TextStyle,

    helloworld: {
        marginVertical: 15,
    } as React.ViewStyle,
})
