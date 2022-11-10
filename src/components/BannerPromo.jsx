import React from "react";
import Carousel from "./Carousel";
import ModalCreditos from "./ModalCreditos";

export const BannerPromo = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 678,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          autoplay: true,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
    ],
  };
  return (
    <>
    <section className="pad bannerPromo item">
      
      <div className="row">
        <Carousel className="" settings={settings}>
          <div className="">
            <i className="bi bi-credit-card-2-back"></i>
            <p>Tarjetas, transferencia o efectivo</p>
          </div>
          <div className="">
            {" "}
            <i class="bi bi-truck"></i>
            <p>Envíos por la zona sin costo!</p>
          </div>
          <div className="">
          
            <i class="bi bi-person-check"></i>
            <p>Créditos personales.<ModalCreditos /> </p>
          
          </div>
          <div className="">
            <i className="bi bi-credit-card-2-back"></i>
            <p>Tarjetas, transferencia o efectivo</p>
          </div>
          <div className="">
            {" "}
            <i class="bi bi-truck"></i>
            <p>Envíos por la zona sin costo!</p>
          </div>
          <div className="">
          
            <i class="bi bi-person-check"></i>
            <p>Créditos personales.<ModalCreditos /> </p>
          
          </div>
        </Carousel>
      </div>
      
    </section>
   
    </>
  );
};
