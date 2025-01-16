import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Skills from './pages/Skills'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/Contacts" element={<Contacts/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Skills" element={<Skills/>} />
          <Route path="*" element={<Homepage/>} />
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
