import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import MyProjects from './components/MyProjects/MyProjects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <AboutMe />
      <Skills />
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;