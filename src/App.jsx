import { Board } from './components/Board'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {
  return (
    <main className="grid min-h-screen place-content-center w-full bg-slate-900 font-press-start">
      <Header />
      <Board />
      <Footer author="Pablo Pedraza" github="wayaba" />
    </main>
  )
}

export default App
