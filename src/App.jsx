import { Footer } from './components/Footer'
import { Game } from './components/Game'
import { Header } from './components/Header'

function App() {
  return (
    <main className="grid grid-cols-1 h-screen place-content-center bg-slate-900 font-press-start">
      <section className="m-4">
        <Header />
        <Game />
        <Footer author="Pablo Pedraza" github="wayaba" />
      </section>
    </main>
  )
}

export default App
