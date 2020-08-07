import React, { useEffect, useState } from 'react'
import { UsersAPI } from '@api/api'
import useRequest from '@hooks/useRequest'
import Loader from '@components/Loader'
import UserListView from '../view/UserListView'

const UserListController = () => {
  const [value, setValue] = useState([])
  const [fullUserData, setFullUserData] = useState([])
  const [userData, setUserData] = useState([])

  const { data, handleRequest, isFetching, success } = useRequest(
    UsersAPI.getUsers
  )

  const filterData = (arr, query) => {
    return arr.filter(
      (val) =>
        val.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        val.email.toLowerCase().indexOf(query.toLowerCase()) !== -1
    )
  }

  const handleSearch = () => {
    setUserData(filterData(fullUserData, value))
  }

  const setSearchValue = (e) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    // here I would usually replace `!Object.keys(data).length` with lodash `!_.isEmpty(data)`.
    if (!isFetching && success && Object.keys(data).length) {
      setUserData(data)
      setFullUserData(data)
    }
  }, [isFetching])

  useEffect(() => {
    handleRequest([])
  }, [])

  return isFetching ? (
    <Loader />
  ) : (
    <UserListView
      searchValue={value}
      setSearchValue={setSearchValue}
      handleSearch={handleSearch}
      userData={userData}
    />
  )
}

export default UserListController
