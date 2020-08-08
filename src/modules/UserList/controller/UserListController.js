import React, { useEffect, useState } from 'react'
import { UsersAPI } from '@api/api'
import useRequest from '@hooks/useRequest'
import Loader from '@components/Loader'
import UserListView from '../view/UserListView'

const UserListController = () => {
  const [value, setValue] = useState('')
  const [fullUserData, setFullUserData] = useState([])
  const [userData, setUserData] = useState([])

  const { data, handleRequest, isFetching, success } = useRequest(
    UsersAPI.getUsers
  )

  const filterData = (arr, query) => {
    // filter the full array of data
    // loops through the certain values I want to search and looks for indexOf searchVal
    // setting both searchable value and the entered value toLowerCase stops any case sensitivity
    // filters out the true values and returns the whole object into an array
    return arr.filter(
      (val) =>
        val.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        val.email.toLowerCase().indexOf(query.toLowerCase()) !== -1
    )
  }

  const handleSearch = () => {
    setUserData(filterData(fullUserData, value))
    if (value !== '') window.scrollTo(0, 0)
    // requires some debounce logic to not fire this scroll again until it is over
  }

  const setSearchValue = (e) => {
    setValue(e.target.value)
  }

  const clearSearchValue = () => {
    setValue('')
    setUserData(filterData(fullUserData, ''))
    if (value !== '') window.scrollTo(0, 0)
    document.getElementById('search').focus()
    // requires some debounce logic to not fire this scroll again until it is over
  }

  useEffect(() => {
    // here I could replace `!Object.keys(data).length` with lodash `!_.isEmpty(data)`.
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
      clearSearchValue={clearSearchValue}
      userData={userData}
    />
  )
}

export default UserListController
