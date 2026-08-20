import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Traihub from './components/Traihub';
import Hospital from './components/Hospital';

function App() {
  const [showTraihub, setShowTraihub] = React.useState(false);
  const [showHospital, setShowHospital] = React.useState(false);

  return (
    <div style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects
          onExploreTraihub={() => setShowTraihub(true)}
          onExploreHospital={() => setShowHospital(true)}
        />
        <Skills />
        <Contact />
      </main>

      {showTraihub && <Traihub onClose={() => setShowTraihub(false)} />}
      {showHospital && <Hospital onClose={() => setShowHospital(false)} />}
    </div>
  );
}

export default App;
