import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Header from './components/Header'
import Topics from './components/Topics'

function App() {
  let [topic, setTopic] = useState('home')

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Topics set={setTopic} />
        <Routes>
          <Route path="/" element={<Home topic={topic} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
