declare module 'react-native-button' {
    import React, { Component } from 'react'

    interface Props {
        style?: React.ViewStyle
        styleDisabled?: React.ViewStyle
        onPress?: () => any
    }

    export default class Button extends Component<Props, any> {}
}
