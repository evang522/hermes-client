//================================== Store Actions ====================>
export const SET_LOADING = 'SET_LOADING';
export const setLoading = () => ({
  type:SET_LOADING
})

export const CLEAR_LOADING = 'CLEAR_LOADING';
export const clearLoading = () => ({
  type:CLEAR_LOADING
})

export const SET_ERROR = 'SET_ERROR';
export const setError = err => ({
  type:SET_ERROR,
  err
})