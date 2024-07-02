//import {useState, useEffect} from 'react'

// const Welcome = () => <h1>Welcome</h1>

import {useEffect} from 'react'

const add = (a, b) => {
  useEffect(() => {
    document.title = 'Welcome'
  })
  return a + b
}

const Welcome = () => <h1>{add(1, 2)}</h1>
export default Welcome
