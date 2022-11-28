

import { Header } from './components/Header'

import './App.module.css'

import './global.css'
import { Container } from './components/Container'
import { Nav } from './components/Nav'
import { Tasks } from './components/Tasks'

function App() {
 

  return (
    <div>
        <Header /> 
        <Container />
        <Nav />
        <Tasks />
    </div>
  )
}

export default App
