import React from 'react';

const ItemSlider = () => {
  return (
    <>
      <ul
        className="top-0 left-0 p-0 m-0 w-full font-sans text-white"
        id="customize-controls"
        aria-label="Carousel Navigation"
        tabIndex={0}
        style={{ outline: 0, maxWidth: 1440 }}
      >
        <li
          className="absolute py-6 px-8 m-0 h-5 font-sans list-none text-left text-white bg-red-600 opacity-75 hover:cursor-pointer hover:opacity-90"
          aria-controls="carousel-videos"
          tabIndex={-1}
          data-controls="prev"
          style={{
            top: "45%",
            borderRadius: "25%",
            left: "1%",
            listStyle: "outside none none"
          }}
        >
          <i
            className="inline-block p-0 m-0 text-base not-italic font-black leading-none text-left text-white cursor-pointer"
            style={{
              outline: 0,
              fontVariant: "normal",
              textRendering: "auto",
              fontFamily: '"font awesome 5 free"',
              listStyle: "outside none none"
            }}
          />
        </li>
        <li
          className="absolute py-6 px-8 m-0 h-5 font-sans list-none text-left text-white bg-red-600 opacity-75 hover:cursor-pointer hover:opacity-90"
          aria-controls="carousel-videos"
          tabIndex={-1}
          data-controls="next"
          style={{
            top: "45%",
            right: "1%",
            outline: 0,
            borderRadius: "25%",
            listStyle: "outside none none"
          }}
        >
          <i
            className="inline-block p-0 m-0 text-base not-italic font-black leading-none text-left text-white cursor-pointer"
            style={{
              outline: 0,
              fontVariant: "normal",
              textRendering: "auto",
              fontFamily: '"font awesome 5 free"',
              listStyle: "outside none none"
            }}
          />
        </li>
      </ul>

      <img
        className="object-cover p-0 m-0 w-full lg:w-64 lg:h-[600px] font-sans text-white border-0 opacity-100 cursor-grab"
        data-src="https://www.viveusa.mx/sites/default/files/styles/f01-1023x630/public/cursos-ingles-frances-invierno-puma-unam-canada_0.jpeg?itok=45M7SISg"
        data-id="G2wjJpPYFrc"
        src="https://www.viveusa.mx/sites/default/files/styles/f01-1023x630/public/cursos-ingles-frances-invierno-puma-unam-canada_0.jpeg?itok=45M7SISg"
        style={{
          minWidth: "auto",
          filter: "saturate(1.15)",
          transition: "opacity 0.6s ease 0s"
        }}
      />

      <div
        className="z-10 inset-y-0 left-0 p-8 w-full h-full font-sans text-white bg-indigo-900 cursor-grab lg:max-w-[200px] relative"
        style={{ backgroundColor: "#2a3378" }}
      >
        <h2
          className="p-0 m-0 font-sans text-sm font-bold text-white uppercase cursor-grab"
          style={{ outline: 0 }}
        >
          <a
            href="https://www.viveusa.mx/canal/negocios"
            className="p-0 m-0 font-sans text-sm font-bold text-[#EE212D] uppercase hover:cursor-pointer hover:text-indigo-900"
            style={{ outline: 0, textDecoration: "none" }}
          >
            Negocios
          </a>
        </h2>
        <span
          className="p-0 m-0 font-sans text-white cursor-grab"
          style={{ outline: 0 }}
        >
          07/11/2022
        </span>
        <span
          className="p-0 m-0 font-sans text-white cursor-grab"
          style={{ outline: 0 }}
        >
          16:28
        </span>
        <div
          className="p-0 m-0 font-sans text-white cursor-grab"
          style={{ outline: 0 }}
        >
          <a
            href="https://www.viveusa.mx/negocios/loteria-de-visas-2024-que-es-y-que-paises-son-elegibles-como-participar"
            className="p-0 m-0 font-sans text-lg font-bold text-white hover:cursor-pointer hover:text-indigo-900"
            style={{ outline: 0, textDecoration: "none" }}
          >
            Lotería de visas 2024. ¿Qué es y qué países son elegibles? ¿Cómo
            participar?
          </a>
          <p className="mb-4 font-sans text-sm font-extralight tracking-tight leading-4 text-white cursor-grab">
            El gobierno de Estados Unidos asignará hasta 55,000 visas de inmigrante
            o Green Cards en 2024
          </p>
          <h6
            className="p-0 m-0 font-sans font-bold text-white cursor-grab"
            style={{ outline: 0, fontSize: "10.72px" }}
          >
            Redacción
          </h6>
        </div>
      </div>
    </>
  )
}

export default ItemSlider;