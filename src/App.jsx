import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Signup from './components/Signup'
import Footer from './components/Footer'

const App = () => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className='w-full overflow-hidden'>
      {/* Header takes the prop and passes it down to Navbar again */}
      <Header setShowSignup={setShowSignup} />
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer setShowSignup={setShowSignup} />
      
      {showSignup && <Signup setShowSignup={setShowSignup} />}
    </div>
  )
}

export default App