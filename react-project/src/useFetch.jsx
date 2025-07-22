import React, { useEffect, useState } from 'react'

// we use the "use" keyword inorder to create custom hooks
const useFetch = (url) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return [data]
}

export default useFetch
