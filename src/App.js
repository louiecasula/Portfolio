import './App.css';
import Navbar from './components/Navbar';
import Greeting from './pages/Greeting';
import Skills from './pages/Skills';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <div class="gradient">
      <Navbar />
      <main>
        <Greeting />
        <Skills />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
