import { useState } from 'react'

const useRequest = (callFunc) => {
  // this is where the fetched data will be stored
  const [data, setData] = useState({})
  // stores the success state
  const [success, setSuccess] = useState(true)
  // stores the fetching state
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
