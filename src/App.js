import './App.css';
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
      <Skills />
      <MyProjects />
      <Footer />
    </div>
  );
}

export default App;
