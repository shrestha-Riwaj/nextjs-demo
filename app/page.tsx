import { log } from 'console'
import React from 'react'
import Hello from '../components/hello'

const Page = () => {

  console.log("What component is this?")
  return(
    <>
    <div className='text-4xl underline'>Welcome to Next Js</div>
    <Hello />
    </>
    
  )
}

export default Page