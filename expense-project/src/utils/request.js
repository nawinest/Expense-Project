import axios from 'axios'
// const KEY = 'motlin-token'
// const KEY = ''
// const CLIENT_ID = 'odQgKWYJGxwSwAeoVTRoB9wQpIafiDlL1Olb7QFyrX'
const instance = axios.create({

    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8',
        // 'Content-Type':'multipart/form-data; boundary=--------------------------578420666918925589688306',
      },

  baseURL: 'https://assignment-api.dev.witsawa.com'
});

// const implicitLogin = async () => {
//   const formData = new FormData()
//   formData.append('client_id', process.env.REACT_APP_MOTLIN_CLIENT_ID || CLIENT_ID)
//   formData.append('grant_type', 'implicit')
//   const result = await axios.post('https://api.moltin.com/oauth/access_token', formData)
//   const token = result.data
//   return token
// }
// instance.interceptors.request.use(async (config) => {
//   // check if token exist
//   let token = localStorage.getItem(KEY);
//   if (token !== null) {
//     token = JSON.parse(token)
//     if (token.expires*1000 < Date.now()) {
//       token = null
//     }
//   }
//   if(token === null) {
//     token = await implicitLogin()
//     localStorage.setItem(KEY, JSON.stringify(token))
//   }
//   config.headers = {
//     ...config.headers,
//     Authorization: `Bearer ${token.access_token}`
//   }
//   return config;
// })
export default instance