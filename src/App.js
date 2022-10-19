import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Menu from './components/menu';
import TechnoAdd from './pages/technoAdd';
import TechnoList from './pages/technoList';


import './css/app.css';


function App() {
  const [technos, setTechnos] = useState([]);
  // exemple de ce que l'on veux recuperer: [{name: 'react', category: 'front', decription: 'apprendre react'}, {name: 'angular', category: 'front', decription: 'apprendre angular'}, {name: 'node', category: 'back', decription: 'apprendre nodeJs'}]

function handleAddTechno(techno) {
  console.log('handleAddTechno', techno);
  setTechnos([...technos, {...techno, technoid: uuidv4()}])
}

function handleDeleteTechno(id) {
 setTechnos(technos.filter((tech) =>tech.technoid !== id));
}
  return (
   <>
       <Menu />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/add" element={<TechnoAdd handleAddTechno={handleAddTechno}  /> } />
    <Route path="/list" element={ <TechnoList technos={technos} handleDeleteTechno={handleDeleteTechno} />} />
   </Routes>
   </>
  );
}

export default App;
