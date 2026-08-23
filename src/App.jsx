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
import AiInterview from './components/AiInterview';
import EmployeeManagement from './components/EmployeeManagement';
import Frutefy from './components/Frutefy';
import Career from './components/Career';

function App() {
  const [showCareer, setShowCareer] = React.useState(false);
  const [showTraihub, setShowTraihub] = React.useState(false);
  const [showHospital, setShowHospital] = React.useState(false);
  const [showAi, setShowAi] = React.useState(false);
  const [showEmployee, setShowEmployee] = React.useState(false);
  const [showFrutefy, setShowFrutefy] = React.useState(false);

  return (
    <div style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects
          onExploreCareer={() => setShowCareer(true)}
          onExploreTraihub={() => setShowTraihub(true)}
          onExploreHospital={() => setShowHospital(true)}
          onExploreAi={() => setShowAi(true)}
          onExploreEmployee={() => setShowEmployee(true)}
          onExploreFrutefy={() => setShowFrutefy(true)}
        />
        <Skills />
        <Contact />
      </main>

      {showTraihub && <Traihub onClose={() => setShowTraihub(false)} />}
      {showHospital && <Hospital onClose={() => setShowHospital(false)} />}
      {showAi && <AiInterview onClose={() => setShowAi(false)} />}
      {showEmployee && <EmployeeManagement onClose={() => setShowEmployee(false)} />}
      {showFrutefy && <Frutefy onClose={() => setShowFrutefy(false)} />}
      {showCareer && <Career onClose={() => setShowCareer(false)} />}
    </div>
  );
}

export default App;
