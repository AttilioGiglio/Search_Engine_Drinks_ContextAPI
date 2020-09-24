import React from 'react';
import Header from './components/header';
import Formulario from './components/formulario';
import CategoriasProvider from './context/context';
import RecetasProvider from './context/recetascontext';
import ListasRecetas from './components/listasrecetas';

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
      <Header />
      <div className='container mt-5'>
        <div className='row'>
          <Formulario />
        </div>
          <ListasRecetas />
      </div>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
