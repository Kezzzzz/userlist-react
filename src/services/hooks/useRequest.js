import { useState } from 'react'

const useRequest = (callFunc) => {
  // this is where the fetched data will be stored
  const [data, setData] = useState({})
  // checks if the request is successful
  const [success, setSuccess] = useState(true)
  // checks if the request is currently fetching
  const [isFetching, setIsFetching] = useState(false)

  const handleRequest = (args = []) => {
    setIsFetching(true)
    callFunc(...args).then((res) => {
      setSuccess(res.success)
      setData(res.data)
      setIsFetching(false)
    })
  }

  return { data, success, isFetching, handleRequest }
}

export default useRequest
