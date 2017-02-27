
export const loadingStartAction = () => ({
  type: 'LOADING_START',
})

export const loadingEndAction = () => ({
  type: 'LOADING_END',
})

export const loadingNetworkError = () => ({
  type: 'LOADING_NETWORK_ERROR',
})

export const loadingTimeoutError = () => ({
  type: 'LOADING_TIMEOUT_ERROR',
})
