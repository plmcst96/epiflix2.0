import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Hero from './components/Hero';
import GalleryMovie from './components/GalleryMovie';
import Profile from './components/Profile';
import Settings from './components/Settings';

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
      {/* ISTRUZINI PER L'USO:
      1)commenta i tag <header>,<footer> e <main> per poter visualizzare le altre due pagine
      2) decommenta prima il component profile e in seguito settings. ATTENZIONE: da fare separatamentr ahahha */}
      {/* <Profile /> */}
      {/* <Settings /> */}
    </div>
  );
}

export default App;
