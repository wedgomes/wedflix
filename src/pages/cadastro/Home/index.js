import React from 'react';
import Menu from '../../../components/Menu'
import dadosIniciais from '../../../data/dados_iniciais.json';
import BannerMain from '../../../components/BannerMain';
import Carousel from '../../../components/Carousel';
import Footer from '../../../components/Footer';


function Home() {
  return (
    <div style={{ background: "#141414"}}>
      <Menu/>
      
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Joker é ambientado em 1981, e representa Arthur Fleck, um comediante de stand-up fracassado, que é levado à loucura e se envolve em uma vida de crimes e caos em Gotham City."}
      />
      
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
       
      <Carousel
        //ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        //ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        //ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />

       <Carousel
        //ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        //ignoreFirstVideo
        category={dadosIniciais.categorias[5]}
      />


    <Footer></Footer>
    </div>
  );
}

export default Home;
