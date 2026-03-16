import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Footer from './components/Footer';

const App = () => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <BrowserRouter>
      {/* Removed overflow-hidden so pages can scroll naturally */}
      <div className='w-full min-h-screen bg-white relative'>
        
        {/* Navbar stays at the top of every page */}
        <Navbar setShowSignup={setShowSignup} />
        
        {/* Main Content Area */}
        <div className="grow">
          <Routes>
            {/* The Header component is now serving as your Home Page! */}
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer stays at the bottom of every page */}
        <Footer setShowSignup={setShowSignup} />
        
        {/* Modal sits on top of everything when active */}
        {showSignup && <Signup setShowSignup={setShowSignup} />}
      </div>
    </BrowserRouter>
  )
}

export default App;