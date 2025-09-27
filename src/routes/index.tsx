import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'
import '../App.css'
import BackToTop from '@/components/backToTop'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="App">
                  <BackToTop/>

    </div>
  )
}
