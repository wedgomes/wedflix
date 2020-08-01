import React from 'react';
import { FooterBase } from './styles';
import Baixo from '../../assets/img/logo-footer.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/wedgomes">
        <img src={Baixo} alt="Logo WG" />
      </a>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="https://github.com/wedgomes">
          Wédson Rodolfo Lopes Gomes
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
