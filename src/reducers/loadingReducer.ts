
interface ActionInterface {
  type: string
}

const defaultValue: number = 0

export default (loading: number = defaultValue, action: ActionInterface): number => {
  switch (action.type) {
  case 'LOADING_START':
    loading += 1
    break
  case 'LOADING_END':
    loading -= 1
    break
  default:
    break
  }
  return loading
}
