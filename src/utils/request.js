export default {
  get: (url) => {
    const promise = new Promise((resolve) => {
      fetch(url)
        .then((response) => {
          // tailored for ease for the Users json provided
          return response.json()
        })
        .then((resJson) => {
          console.log('resJson: ', resJson)
          resolve({ success: true, data: resJson })
        })
        .catch((err) => {
          resolve({ success: false, ...err })
        })
    })
    return promise
  },
}
