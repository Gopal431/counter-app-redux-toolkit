import React from 'react'
import { useSelector } from 'react-redux';

const Home = () => {
    const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default Home
