import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    const valoresIniciais ={
        nome: '',
        descricao: '',
        cor:'',
    }

    const [categorias, setNovaCategorias] =useState([]);

    const [values, setvalues] = useState(valoresIniciais);

    function setValue(chave, valor){
        setvalues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange(infosDoEvento){
        const {getAttribute, value} = infosDoEvento.target;
        setValue(
            getAttribute('name'),
            value
        )
    }

    return(
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome} </h1>

            <form onSubmit={function handleSubmit(infosDoEvento){
                infosDoEvento.preventDefault();
                setNovaCategorias([
                    ...categorias,
                    values
                ]);

                setvalues(valoresIniciais)
                
            }}>
                <div>
                    <label>
                        Nome da Categoria:
                        <input 
                            type="text"
                            value={values.nome}
                            name="nome"
                            onChange={handleChange}
                        />   
                    </label>
                </div>
                <div>
                    <label>
                        Descrição:
                        <textarea 
                            type="text"
                            value={values.descricao}
                            name="descricao"
                            onChange={handleChange}
                        />   
                    </label>
                </div>
                <div>
                    <label>
                        Cor:
                        <input 
                            type="color"
                            value={values.cor}
                            name="cor"
                            onChange={handleChange}
                        />   
                    </label>
                </div>

                <button>
                    Cadastrar
                </button>
            </form>




            <ul>
               {categorias.map((categoria, indice) => {
                   return (
                    <li key={`${categoria}${indice}`}>
                        {categoria.nome}
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