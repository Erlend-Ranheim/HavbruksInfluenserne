import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/inter";
import "@fontsource/inter/700.css";
import './index.css'
import Hovedinnhold from './components/Hovedinnhold.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Video from './components/Video.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Navbar />
      <Video />
      <Hovedinnhold />
      <Footer />
  </StrictMode>,
)
