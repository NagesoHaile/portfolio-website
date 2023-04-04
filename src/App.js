
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Skill from './components/Skill';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skill />
      <Footer />
    </div>
  );
}

export default App;
