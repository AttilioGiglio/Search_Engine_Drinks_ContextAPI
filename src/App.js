import React from 'react';
import Header from './components/header.component';
import Formulario from './components/formulario.component';
import CategoriasProvider from './context/categorias.context';
import RecetasProvider from './context/recetas.context';
import ListasRecetas from './components/listasrecetas.component';

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
