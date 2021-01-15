import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    const [categorias, setNovaCategorias] =useState(['Teste']);
    const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial');

    return(
        <PageDefault>
            <h1>Cadastro de Categoria: {nomeDaCategoria} </h1>

            <form onSubmit={function handleSubmit(infosDoEvento){
                infosDoEvento.preventDefault();
                setNovaCategorias([
                    ...categorias,
                    nomeDaCategoria
                ]);
                
            }}>

                <label>
                    Nome da Categoria:
                    <input 
                        type="text"
                        value={nomeDaCategoria}
                        onChange={function funcaoHandlerQueOErroPediu(infosDoEvento) {
                            setNomeDaCategoria(infosDoEvento.target.value);
                        
                        }}
                    />   
                </label>

                <button>
                    Cadastrar
                </button>
            </form>




            <ul>
               {categorias.map((categoria, indice) => {
                   return (
                    <li key={`${categoria}${indice}`}>
                        {categoria}
                    </li>
                )
               })
              }
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;