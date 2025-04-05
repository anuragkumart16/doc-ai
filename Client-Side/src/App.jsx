import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Upload from './pages/Upload'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Upload/>}/>
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </Router>
  )
}

export default App
