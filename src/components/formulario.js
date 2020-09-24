import React, {useContext, useState} from 'react';
import {CategoriasContext} from '../context/context';
import {RecetasContext} from '../context/recetascontext';

const Formulario = () => {

    const {categorias} = useContext(CategoriasContext);
    const {buscarRecetas} = useContext(RecetasContext);

    const [busqueda, guardarBusqueda] = useState({
        nombre:'',
        categoria:''
    }); 

    // funcion para leer los contenidos
    const obtenerDatosReceta = e => {
        guardarBusqueda({...busqueda, [e.target.name]: e.target.value})
    }

    return (
        <form 
        className="col-12"
        onSubmit={e => 
        { e.preventDefault();
          buscarRecetas(busqueda)
        }
        }
        >
        <fieldset className="text-center">
            <legend>Busca bebidas por Categoría o Ingrediente</legend>
        </fieldset>
        <div className="row mt-4">
            <div className="col-md-4">
                <input
                    name="nombre"
                    className="form-control"
                    type="text"
                    placeholder="Buscar por Ingrediente"
                    onChange={obtenerDatosReceta}
                />
            </div>
            <div className="col-md-4">
                <select 
                    className="form-control"
                    name="categoria"
                >
                    <option>-- Selecciona Categoría --</option>
                    {categorias.map(categoria => (
                        <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>
                    ))}
                </select>
            </div>

            <div className="col-md-4">
                <input
                    type="submit"
                    className="btn btn-block btn-primary"
                    value="Buscar Bebidas"
                    onChange={obtenerDatosReceta}
                />
            </div>
        </div>
    </form>
 );
}

export default Formulario
