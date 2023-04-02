import { Board } from './components/Board'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {
  return (
    <main className="grid grid-cols-1 h-screen place-content-center bg-slate-900 font-press-start">
      <section className="m-4">
        <Header />
        <Board />
        <Footer author="Pablo Pedraza" github="wayaba" />
      </section>
    </main>
  )
}

export default App
