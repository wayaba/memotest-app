import { Footer } from './components/Footer'
import { Game } from './components/Game'
import { Header } from './components/Header'

function App() {
  return (
    <main className="grid h-screen place-content-center bg-slate-900 font-press-start">
      <Header />
      <Game />
      <Footer author="Pablo Pedraza" github="wayaba" />
    </main>
  )
}

export default App
