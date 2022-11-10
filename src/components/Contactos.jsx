import React from "react";
import Carousel from "./Carousel";
import hogar from "../img/hogar.jpg";
import tecnologia from "../img/tecnologia.jpeg";
import muebles from "../img/muebles.jpg";
import colchones from "../img/colchones.jpg";
import { useState } from "react";
import Loader from "./Loader";

const Contactos = () => {
  const [isLoading, setIsLoading] = useState(true);

  const onLoad = () => {
    setIsLoading(false);
  };
  // eslint-disable-next-line no-restricted-globals
  let celu = screen.width < 990 ? "api" : "web";
  let linkHogar = `https://${celu}.whatsapp.com/send?phone=5491168475475&text=Hola%20Mobilem%20hogar%20😀!`;
  let linkMuebles = `https://${celu}.whatsapp.com/send?phone=5491160479703&text=Hola%20Mobilem%20muebles%20😀!`;
  let linkTecnologia = `https://${celu}.whatsapp.com/send?phone=5491168475747&text=Hola%20Mobilem%20tecnología%20😀!`;
  let linkColchones = `https://${celu}.whatsapp.com/send?phone=5491136693657&text=Hola%20Mobilem%20colchones%20😀!`;

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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {isLoading ? <Loader></Loader> : ""}
      <section className="pad">
        <div className="row">
          <Carousel className="maxCar" settings={settings}>
            <div>
              <div className="card">
                <div className="pieContacto">
                  <a target="_blank" rel="noopener noreferrer" href={linkHogar}>
                    <i className="bi bi-whatsapp"></i> línea Hogar{" "}
                  </a>
                </div>

                <div className="card-img">
                  <img src={hogar} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div>
              <div className="card">
                <div className="pieContacto">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={linkMuebles}
                  >
                    <i className="bi bi-whatsapp"></i> línea Muebles
                  </a>
                </div>

                <div className="card-img">
                  <img src={muebles} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div>
              <div className="card">
                <div className="pieContacto">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={linkTecnologia}
                  >
                    <i className="bi bi-whatsapp"></i>línea Tecnología
                  </a>
                </div>

                <div className="card-img">
                  <img
                    src={tecnologia}
                    onLoad={onLoad}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="card">
                <div className="pieContacto">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={linkColchones}
                  >
                    <i className="bi bi-whatsapp"></i> línea Colchones
                  </a>
                </div>

                <div className="card-img">
                  <img src={colchones} alt="" className="img-fluid" />
                </div>
              </div>
            </div>

            <div>
              <div className="card">
                <div className="pieContacto">
                  <a target="_blank" rel="noopener noreferrer" href={linkHogar}>
                    <i className="bi bi-whatsapp"></i> línea Hogar{" "}
                  </a>
                </div>

                <div className="card-img">
                  <img src={hogar} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div>
              <div className="card">
                <div className="pieContacto">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={linkMuebles}
                  >
                    <i className="bi bi-whatsapp"></i> línea Muebles
                  </a>
                </div>

                <div className="card-img">
                  <img src={muebles} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div>
              <div className="card">
                <div className="pieContacto">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={linkTecnologia}
                  >
                    <i className="bi bi-whatsapp"></i>línea Tecnología
                  </a>
                </div>

                <div className="card-img">
                  <img src={tecnologia} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div>
              <div className="card">
                <div className="pieContacto">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={linkColchones}
                  >
                    <i className="bi bi-whatsapp"></i> línea Colchones
                  </a>
                </div>

                <div className="card-img">
                  <img src={colchones} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="ps-2 col-12">
              <h4>Sucursales</h4>
              <p>
                Casa central, Polledo 45, Rafael Castillo / teléfono: 1175353509
                / horarios: lun a sab 9 a 13 hs y de 16:30 a 20 hs{" "}
              </p>
              <p>
                Muebleria, Polledo 27, Rafael Castillo / teléfono: 1160692736 /
                horarios: lun a sab 9 a 13 hs y de 16:30 a 20 hs
              </p>
              <p>
                Colchoneria, Cristiania 1683, Isidro Casanova / teléfono:
                1120722672 / horarios: lun a sab 9 a 13 hs y de 16:30 a 20 hs
              </p>
              <p>
                San Justo, Arieta 2639, San Justo / teléfono: 1154785445 /
                horarios: lun a sab 9 a 13 hs y de 15 a 18 hs
              </p>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/d/embed?mid=17DaENuBW9v1ZbigMtk7FFA7zWBxI7II_&ehbc=2E312F"
              width=""
              height="500"
              allowfullscreen
              frameborder="0"
              class="col-12 pb-3"
              title="mapa de sucursales"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contactos;
