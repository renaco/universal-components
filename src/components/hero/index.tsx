import React from 'react';
// import './styles.scss';

export const Hero = () => {
  return (
    <picture
      className="relative p-0 mx-auto mt-0 mb-2 w-full font-sans border-sky-800 text-sky-800 hero_titleContainer"
      data-gtm-vis-recent-on-screen-37354429_179={197354}
      data-gtm-vis-first-on-screen-37354429_179={197355}
      data-gtm-vis-total-visible-time-37354429_179={100}
      data-gtm-vis-has-fired-37354429_179={1}
    >
      <img
        className="inline p-0 m-0 w-full text-sky-800 hero_image"
        src="https://www.eluniversal.com.mx/sites/default/files/styles/f01-1080x400_corte_1_u2020/public/2021/11/23/imagen_boletines2.jpg?itok=P9pNnnfd"
        alt="Estos fueron los resultados electorales en México 2021"
        title=""
        loading="lazy"
      />
      <div
        className="absolute top-1/2 left-1/2 p-0 m-0 w-full border-sky-800 text-sky-800 font-['Work_Sans'] hero_wrapper"
      >
        <h3
          className="p-0 m-0 font-bold text-center text-sky-800 is-shadow"
        >
          <a
            href="nacion/politica/estos-fueron-los-resultados-electorales-en-mexico-2021"
            target="_self"
            className="p-0 m-0 text-3xl lg:text-[56px] lg:leading-[60px] font-bold text-center text-white hover:cursor-pointer hover:text-sky-800 no-underline is-shadow"
          >
            Más cerca de ti: conoce y suscríbete a nuestros newsletters
          </a>
          <p
            className="hidden md:block my-2 mx-auto text-base lg:text-lg font-light leading-5 text-center text-white is-shadow"
          >
            En EL UNIVERSAL tenemos una oferta de boletines para que estés bien informado, conócelos, suscríbete y pasa la voz
          </p>
          <button
            className="table py-2 px-12 my-4 mx-auto font-sans font-semibold tracking-wider leading-3 text-center text-black uppercase bg-white border-2 border-white border-solid cursor-default bg-opacity-[0] is-shadow"
            style={{
              borderRadius: 100,
              transition: "all 0.4s ease-out 0s",
            }}
          >
            <a
              href="nacion/politica/estos-fueron-los-resultados-electorales-en-mexico-2021"
              target="_self"
              rel="bookmark"
              className="p-0 m-0 font-semibold tracking-wider leading-3 text-center text-white uppercase hover:cursor-pointer hover:text-sky-800 font-['Work_Sans'] no-underline text-[11px] is-shadow"
            >
              VER
            </a>
          </button>
        </h3>
      </div>
    </picture>
  )
}