import request from '../../utils/request'

export const exp = {
  state: {
    expenseData:[]
  },
  
  reducers: {
    setExpenseItems(state, payload) {
      return {
        ...state,
        expenseData: payload
      }
    }
  },
  effects: (dispatch) => ({
    async getTransaction(payload, rootState){
      const user_id=payload.user_id
      const res = await request.get(`/transactions?user=${user_id}`)
      // console.log(res)
      const cleanData = res.data.map((item) => {
        return {
          trans_id:   item._id,
          user_id :   item.user,
          amount  :   item.amount,
          type    :   item.type,
          remark  :   item.remark,
          date    :   item.date,
          
        }
      })
      dispatch.exp.setExpenseItems(cleanData)
    },

    async createTransaction(payload,rootState){
      const {user_id , type, amount , remark , date} = payload
      const info = {
          user    : user_id,
          amount  : amount,
          type    : type,
          remark  :  remark ,
          date    :  date
      }
      await request.post('/transactions',info)
      dispatch.exp.getTransaction({user_id:user_id})
    },

    async updateTransaction(payload,rootState){
      const trans_id = payload.trans_id
      const date = new Date()
      const info = {
          // "user": userID,
          // "amount": Number,
          // "type": enum["income", "expense"],
          // "remark": String,
          // "date": Date
          // user    : payload.user_id,
          // amount  : payload.amount,
          // type    : payload.type,
          // remark  : payload.remark,
          // date    : date
          user    : payload.user_id,
          amount  : payload.amount,
          type    : payload.type,
          remark  : payload.remark,
          date    :  date
      }
      console.log(info)
      await request.put(`/transactions/${trans_id}`,info)
      dispatch.exp.getTransaction({user_id:payload.user_id});
    },

    async deleteTransaction(payload,rootState){
      const trans_id=payload.trans_id
      await request.delete(`/transactions/${trans_id}`)
      dispatch.exp.getTransaction({user_id:payload.user_id});
    }

  }),
} //export exp