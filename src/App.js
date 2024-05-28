import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div class="gradient">
      <Navbar />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
