import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/exportComp.js'

function App() {
  return (
    <div>
      <header>
        header
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default App
