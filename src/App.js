import React from 'react';
import Header from './components/header';
import Formulario from './components/formulario';
import CategoriasProvider from './context/context';

function App() {
  return (
    <CategoriasProvider>
      <Header />
      <div className='container mt-5'>
        <div className='row'>
          <Formulario />
        </div>

      </div>
    </CategoriasProvider>
  );
}

export default App;
