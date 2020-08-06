/* eslint-disable import/prefer-default-export */
import request from '@utils/request'

export const UsersAPI = {
  getUsers: () => request.get('http://jsonplaceholder.typicode.com/users'),
}
