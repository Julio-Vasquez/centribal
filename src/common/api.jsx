import { message } from 'antd'
import { URL_API, ErrorJson } from './environment'

export const GET = async ({ url }) => {
  return fetch(`${URL_API}${url}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then(async res => {
      if (res.statusText !== 'OK') message.error(ErrorJson[res.status])
      res.payload = await res.json()
      return res
    })
    .catch(error => message.error(error))
}
