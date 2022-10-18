import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

//function component
const App = ({name, designation}) => {
  return (
    <>
      <h1>{name}</h1>
      <p style={{textDecoration:'underline'}}>{designation}</p>
    </>
  )
}

export default App
