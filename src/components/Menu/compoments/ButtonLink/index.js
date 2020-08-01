import React from 'react';

function ButtonLink(props){
    //props => {O que alguém passar}
    console.log(props);

    return (
        <a className={props.className} href={props.href}>
            Novo Vídeo
        </a>
    );
}

export default ButtonLink;