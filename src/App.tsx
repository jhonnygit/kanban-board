import React,{ useState } from 'react'
import './App.css'
import Board from './components/Board'

function App() {
  return (
    <>
      <div className='"min-h-screen bg-gray-200 flex justify-center items-center'>
        <Board />
      </div>
    </>
  )
}

export default App
