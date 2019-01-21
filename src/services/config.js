/* const apiUrls = {
  apiDomain: 'http://127.0.0.1:8000',
  loginUrl: apiDomain + '/oauth/token'
}

export default apiUrls */

export const apiDomain = 'http://127.0.0.1:8000/'
export const loginUrl = apiDomain + 'oauth/token'
export const userUrl = apiDomain + 'api/user'

export const getHeader = function () {
  const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + tokenData.access_token
  }

  return headers
}
