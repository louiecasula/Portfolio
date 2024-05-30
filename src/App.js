import './App.css';
import Navbar from './components/Navbar';
import Greeting from './pages/Greeting';
import Skills from './pages/Skills';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div class="gradient">
      <Navbar />
      <Greeting />
      <Skills />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
