
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import BookingPage from './pages/BookingPage'

const App = () => {
  return (
    <Router basename="/jarika-watamu">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="booking" element={<BookingPage/>}/>
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
