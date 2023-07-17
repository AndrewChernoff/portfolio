import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import MyProjects from './components/MyProjects/MyProjects';
import Skills from './components/Skills/Skills';
import { useState } from 'react';
import Alert from '@mui/material/Alert';

function App() {
  const [requestError, setRequestError] = useState(false);
  const [status, setStatus] = useState('')

  const handleClose = () => {
    setRequestError(false);
  };

  return (
    <div className="App">
      <Header/>
      <Main />
      <AboutMe />
      <Skills />
      <MyProjects />
      {requestError && <Alert onClose={handleClose} severity={status} sx={{ maxWidth: '40%'}} style={{position:'fixed', width: '100%', left: '30%', top: '10%', zIndex:'1'}}>
            {status === 'error' ? 'Some error ' : 'This is a success message!'}
          </Alert>}
      <Contact setRequestError={setRequestError} requestError={requestError} setStatus={setStatus} status={status}/>
      <Footer />
    </div>
  );
}

export default App;
