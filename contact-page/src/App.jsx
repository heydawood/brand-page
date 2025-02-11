import { useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import ContactForm from './components/ContactForm/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <main className='main_container'>
      <Hero/>
      <ContactForm/>
      </main>
    </>
  )
}

export default App
