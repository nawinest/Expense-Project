import request from '../../utils/request'

export const user = {
  state: {
    user_id: null,
    isAuthenticated: false,
    username : ''
  },
  reducers: {
    setUser(state, payload) {
      localStorage.setItem('token', payload.user_id)
      localStorage.setItem('username', payload.username)
      return {
        ...state,
        user_id: payload.user_id,
        isAuthenticated : true,
      }
    },
    logout(state , payload){
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      return {
        ...state,
        user_id: null,
        isAuthenticated : false,
      }
    },loadUser(state ,payload){
      return {
        ...state, 
        user_id : localStorage.getItem('token'),
        username : localStorage.getItem('username')
      }
    }
  },
  effects: (dispatch) => ({

    async login(payload, rootState) {
      const info = {
        username: payload.username,
        password: payload.password,
      }
      const res = await request.post('/users/login', info)
      const user_id = res.data._id
      const username = res.data.username
      dispatch.user.setUser({user_id, username})
      dispatch.user.loadUser()
    },

    async signup(payload, rootState) {
      const info = { //test33
        username: payload.username,
        password: payload.password
      }
      const res = await request.post('/users', info)
      dispatch.user.setUser(res.data)
    }
  }),
  selectors: {
    isAuthenticated() {
      return (rootState, props) => rootState.user.user_id !== null
    },
  },
} //export user
