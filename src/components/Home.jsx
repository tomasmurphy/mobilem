import Carousel from "./Carousel";
import {Item} from './Item'
import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import { collection, getDocs } from 'firebase/firestore';
import { dataBase } from '../firebaseConfig';
import { useParams } from 'react-router-dom';


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
                setItems(productos)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    },
        [nombreCategoria]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  };
  return (
         <>
         {isLoading ? (<Loader />) :
         (<section className="pad home item">
         <div className="row"><Carousel className='maxCar' settings={settings}>
             {
            items.map(item =>
               <Item 
                  key={item.id}
                  id={item.id}
                  img1={item.img1}
                  titulo={item.titulo}
                  stock={item.stock}
                  precio={item.precio} />
                           )
         }            
        </Carousel></div></section>)}
        </>
    );
};

export default Home;
