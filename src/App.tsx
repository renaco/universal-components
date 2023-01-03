import './App.css';
import { NewsLetter } from './components/newsletter'
import { Hero } from './components/hero'
import UniversalNewsletter from './components/newsletter/universal';
import ViveUSANewsletter from './components/newsletter/viveusa';
import ClaseNewsLetter from './components/newsletter/clase';
import Cookies from './components/cookies';

function App() {
  return (
    <div className="App">
      <NewsLetter />
      <Hero />
      <UniversalNewsletter />
      <ViveUSANewsletter />
      <ClaseNewsLetter />
      <Cookies />
    </div>
  );
}

export default App;
