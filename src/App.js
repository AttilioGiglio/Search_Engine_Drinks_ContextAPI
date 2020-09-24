import React from 'react';
import Header from './components/header';
import Formulario from './components/formulario';
import CategoriasProvider from './context/context';
import RecetasProvider from './context/recetascontext';

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
      <Header />
      <div className='container mt-5'>
        <div className='row'>
          <Formulario />
        </div>

      </div>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
