import request from '../../utils/request'

export const user = {
  state: {
    user_id: null,
    // isAuthenticated: false
  },
  reducers: {
    setUser(state, payload) {
      return {
        ...state,
        user_id: payload,
      }
    },
  },
  effects: (dispatch) => ({
    async getLogin(payload, rootState) {
      // get username/password by id
      const id = payload
      // console.log(payload)
      const res = await request.get(`/users/${id}`)
      console.log('get login info')
      console.log('username : ' + res.data.username)
      console.log('password : ' + res.data.password)
    },

    async login(payload, rootState) {
      const info = {
        username: payload.username,
        password: payload.password,
        // username: 'test33',
        // password: 'test33',
      }
      console.log(info)
      // console.log(payload)
      const res = await request.post('/users/login', info)
      const user_id = res.data._id
      console.log(user_id)
      dispatch.user.setUser(user_id)
      dispatch.user.getLogin(user_id)
      // dispatch.user.toggleShowExpense()
      // console.log(res)
      // dispatch.user.getLogin()
    },

    async signup(payload, rootState) {
      const info = {
        username: payload.username,
        password: payload.password,
        // username  : 'test33',
        // password  : 'test33'
      }
      console.log(info)
      // console.log(payload)
      const res = await request.post('/users', info)
      const user_id = res.data._id
      console.log(user_id)
      dispatch.user.setUser(user_id)
    },

    async logout(payload, rootState) {
      // dispatch.class.reducer
      // dispatch.user.setAuthenticated(false)
      dispatch.user.setUser(null)
    },
  }),
  selectors: {
    isAuthenticated() {
      return (rootState, props) => rootState.user.user_id !== null
    },
  },
} //export user
