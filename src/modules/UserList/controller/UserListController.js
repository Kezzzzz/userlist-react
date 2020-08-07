import React, { useEffect, useState } from 'react'
import { UsersAPI } from '@api/api'
import useRequest from '@hooks/useRequest'
import UserListView from '../view/UserListView'

const UserListController = () => {
  const [userData, setUserData] = useState([])

  const { data, handleRequest, isFetching, success } = useRequest(
    UsersAPI.getUsers
  )

  useEffect(() => {
    // here I would usually replace `!Object.keys(data).length` with lodash `!_.isEmpty(data)`.
    if (!isFetching && success && Object.keys(data).length) {
      setUserData(data)
    }
  }, [isFetching])

  useEffect(() => {
    handleRequest([])
  }, [])

  return <UserListView userData={userData} />
}

export default UserListController
