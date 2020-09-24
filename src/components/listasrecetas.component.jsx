import React, {useContext} from 'react';
import {RecetasContext} from '../context/recetas.context';
import RecetasVarias from './receta.component';

const ListasRecetas = () => {

    const {recetas} = useContext(RecetasContext);
    
    return (
        <div className='row mt-5'>
            {recetas.map(receta => (
                <RecetasVarias 
                key={receta.idDrink}
                receta={receta}
                />
            ))}
        </div>
    )
}

export default ListasRecetas
