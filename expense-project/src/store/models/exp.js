import request from '../../utils/request'

export const exp = {
  state: {
    data:[]
  },
  reducers: {
    // // setAuthenticated(state, payload) {
    //   return {
    //     ...state,
    //     isAuthenticated: payload
    //   }
    // },
  },
  effects: (dispatch) => ({

    async getLogin(payload,rootState){
      // get username/password by id
      const id='5ce62da5bd19770013f34f19'
      // console.log(payload)
      const res = await request.get(`/users/${id}`)
      console.log('get login info')
      console.log("username : "+res.data.username)
      console.log("password : "+res.data.password)
    },

    async createTransaction(payload,rootState){
      const date = new Date()
      const info = {
          // "user": userID,
          // "amount": Number,
          // "type": enum["income", "expense"],
          // "remark": String,
          // "date": Date
          // user    : payload.id,
          // amount  : payload.amount,
          // type    : payload.type,
          // remark  : payload.remark,
          // date    : payload.date
          user    : '5ce62da5bd19770013f34f19',
          amount  : '10000',
          type    : 'income',
          remark  : 'employing cost',
          date    : date
      }
      console.log(info)
      // console.log(payload)
      const res = await request.post('/users/login',info)
      const token = res.data._id
      console.log(token)
      dispatch.user.setToken(token)
      // dispatch.user.toggleShowExpense()
      // console.log(res)
      // dispatch.user.getLogin()
    },

    async getTransaction(){
      const id='5ce62da5bd19770013f34f19'
      const res = await request.get(`/transactions?user=${id}`)
    }

  }),
  // selectors: {
  //   isAuthenticated () {
  //     return(rootState,props) => rootState.user.token !== null
  //   }
  // }
} //export exp