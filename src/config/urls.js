const BASE_URL = 'http://localhost/englishchatapp/api'; // for Working

const urls = {
  USER: {
    GET: BASE_URL + '/auth/user',
    LOGIN: BASE_URL + '/auth/login',
    LOGIN_FACEBOOK: BASE_URL + '/auth/loginFacebook',
    LOGIN_GOOGLE: BASE_URL + '/auth/loginGoogle',
  },
}

export {
  urls
}

