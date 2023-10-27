import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Hero from './components/Hero';
import GalleryMovie from './components/GalleryMovie';

function App() {
  return (
    <div>
      <header>
        <MyNav />
      </header>
      <main>
        <Hero />
        <GalleryMovie idSearch={'harry potter'} />
        <GalleryMovie idSearch={'Star Wars'} />
        <GalleryMovie idSearch={'Star trek'} />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
