
export const fetchWXIndustry = () => ({
  type: 'FETCH_WX_INDUSTRY',
})

export const reciveWXIndustry = (industrys: any) => ({
  payload: {
    industrys,
  },
  type: 'Recive_WX_INDUSTRY',
})

export const fetchAliIndustry = () => ({
  type: 'FETCH_ALI_INDUSTRY',
})
