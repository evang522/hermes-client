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

export const SET_ADDING_ROOM = 'SET_ADDING_ROOM';
export const setAddingRoom = () => ({
  type:SET_ADDING_ROOM
})

export const UNSET_ADDING_ROOM = 'UNSET_ADDING_ROOM';
export const unsetAddingRoom = () => ({
  type: UNSET_ADDING_ROOM
})


export const SET_REDIRECT_HOME = 'SET_REDIRECT_HOME';
export const setRedirectHome = () => ({
  type:SET_REDIRECT_HOME
})

export const UNSET_REDIRECT_HOME = 'UNSET_REDIRECT_HOME';
export const unsetRedirectHome = () => ({
  type:UNSET_REDIRECT_HOME
})