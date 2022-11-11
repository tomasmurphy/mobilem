import {Item} from './Item'
import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import { collection, getDocs } from 'firebase/firestore';
import { dataBase } from '../firebaseConfig';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet'; 

const Home = () => {
    window.scrollTo(0, 0)
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { nombreCategoria } = useParams() 

    useEffect(() => {
   
    const q = collection(dataBase, 'productos');

        getDocs(q)
            .then((res) => {
                const productos = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data()
                    }
                });
                const productosOrdenados = [...productos].sort((a, b) => (a.precio > b.precio ? 1 : a.precio < b.precio ? -1 : 0))
                setItems(productosOrdenados)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    },
        [nombreCategoria]);

  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear",
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2
  //       }
  //     }
  //   ],
  // };
  return (
         <>
         <Helmet>
        <title>Tienda Mobilem</title>
        <meta
      name="description"
      content="Tienda de articulos para el hogar"
    />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Tienda Mobilem" />
        <meta
          property="og:description"
          content="Tienda de articulos para el hogar"
        />
        <meta
          property="og:url"
          content="mobilem.com.ar"
        />
        <meta
          property="og:site_name"
          content="Mobilem"
        />
        <meta
          itemProp='image'
          property="og:image"
          content=""
        />
      </Helmet>
         {isLoading ? (<Loader />) :
         (
            <section className="item">
         <div className="row">
               <div className='col-6 col-md-3 card'>
               <Item  
                  key={items[0].id}
                  id={items[0].id}
                  imagenes={items[0].imagenes}
                  titulo={items[0].titulo}
                  stock={items[0].stock}
                  precio={items[0].precio} />
                  </div>
                  <div className='col-6 col-md-3 card'>
               <Item  
                  key={items[1].id}
                  id={items[1].id}
                  imagenes={items[1].imagenes}
                  titulo={items[1].titulo}
                  stock={items[1].stock}
                  precio={items[1].precio} />
                  </div>
                  <div className='col-6 col-md-3 card'>
               <Item  
                  key={items[2].id}
                  id={items[2].id}
                  imagenes={items[2].imagenes}
                  titulo={items[2].titulo}
                  stock={items[2].stock}
                  precio={items[2].precio} />
                  </div>
                  <div className='col-6 col-md-3 card'>
               <Item  
                  key={items[3].id}
                  id={items[3].id}
                  imagenes={items[3].imagenes}
                  titulo={items[3].titulo}
                  stock={items[3].stock}
                  precio={items[3].precio} />
                  </div>
                           
         
       </div>
            
        </section>)}
        <div className="botonera">
            <Link to="/categoria" className="boton">
                Ver todos los productos
            </Link>
            </div>
        </>
    );
};

export default Home;
