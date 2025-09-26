import './styles/global.css'
import './styles/theme.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
export function App() {
    return (
        <>
            <Navbar />
            <Hero />
        </>
    )
}