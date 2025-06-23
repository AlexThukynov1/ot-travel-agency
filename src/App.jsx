import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './sections/Home'
import Categories from './sections/Categories'
import About from './sections/About'
import Destination from './sections/Destination'
import Tours from './sections/Tours'

const App = () => {
  return (
    <>
      <Header/>
      <Home/>
      <Categories/>
      <About/>
      <Destination/>
      <Tours/>
      <Footer/>
    </>
  ) 
}

export default App