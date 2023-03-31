import { Board } from './components/Board'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {
  return (
    <main className="grid min-h-screen place-content-center w-auto bg-slate-900 font-press-start">
      <section className="min-w-min">
        <Header />
        <Board />
        <Footer author="Pablo Pedraza" github="wayaba" />
      </section>
    </main>
  )
}

export default App
