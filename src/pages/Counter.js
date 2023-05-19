import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
  const count_item = useSelector(store => store)
  // console.log(count)
  const data = count_item.count.count
  return (
    <>
      <h2>Counter: {data}</h2>
    </>
  )
}

export default Counter