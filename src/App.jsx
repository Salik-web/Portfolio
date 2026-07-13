import { useEffect, useState } from 'react'
import Entrance from './Entrance.jsx'
import Editorial from './Editorial.jsx'
import MemePortfolio from './MemePortfolio.jsx'

// Tiny hash-based router — no dependency, and works on static hosting (Vercel)
// with no rewrite config. Routes:
//   #/           -> entrance (the chooser, landing page)
//   #/editorial  -> editorial portfolio
//   #/meme       -> meme portfolio
function getRoute() {
  const path = window.location.hash.replace(/^#/, '')
  if (path === '/editorial') return 'editorial'
  if (path === '/meme') return 'meme'
  return 'entrance'
}

export default function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRoute())
      window.scrollTo(0, 0) // start each page at the top
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  if (route === 'editorial') return <Editorial />
  if (route === 'meme') return <MemePortfolio />
  return <Entrance />
}
