
const combine = (left: any, right: any): any =>
(state: any, action: any): any =>
right(left(state, action), action)

export default (reducers: Object[]): any => reducers.reduce(combine)
