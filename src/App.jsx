import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Topics from './components/Topics'
import Home from './pages/Home'
import Article from './pages/Article'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  let [topic, setTopic] = useState('home')

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Topics set={setTopic} />
        <Routes>
          <Route path="/" element={<Home topic={topic} />} />
          <Route path="/:article_id" element={<Article />} />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  )
}

export default App
