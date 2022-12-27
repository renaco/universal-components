import React from 'react';
import './styles.scss';

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
        src="https://www.eluniversal.com.mx/sites/default/files/styles/f01-1080x400_corte_1_u2020/public/2021/06/08/elecciones_2021_0.jpg?itok=nHTag0TC"
        alt="Estos fueron los resultados electorales en México 2021"
        title=""
        loading="lazy"
      />
      <div
        className="absolute top-1/2 left-1/2 p-0 m-0 w-full border-sky-800 text-sky-800 font-['Work_Sans']"
        style={{ outline: 0, maxWidth: 900, transform: "translate(-50%, -50%)" }}
      >
        <h3
          className="p-0 m-0 text-5xl font-bold text-center text-sky-800"
          style={{
            outline: 0,
            textShadow: "rgba(0, 0, 0, 0.75) 1px 1px"
          }}
        >
          <a
            href="nacion/politica/estos-fueron-los-resultados-electorales-en-mexico-2021"
            target="_self"
            className="p-0 m-0 text-3xl lg:text-5xl font-bold text-center text-white hover:cursor-pointer hover:text-sky-800"
            style={{
              outline: 0,
              textDecoration: "none",
              textShadow: "rgba(0, 0, 0, 0.75) 1px 1px 0px",
            }}
          >
            Estos fueron los resultados electorales en México 2021
          </a>
          <p
            className="hidden md:visible my-2 mx-auto text-lg font-light leading-5 text-center text-white"
            style={{ maxWidth: "60%", textShadow: "rgba(0, 0, 0, 0.75) 1px 1px" }}
          >
            Los resultados de las elecciones 2021 sorprendieron a más de uno
          </p>
          <button
            className="table py-2 px-12 my-4 mx-auto font-sans font-semibold tracking-wider leading-3 text-center text-black uppercase bg-white border-2 border-white border-solid cursor-default bg-opacity-[0]"
            style={{
              outline: 0,
              borderRadius: 100,
              transition: "all 0.4s ease-out 0s",
              fontSize: '11px',
              textShadow: "rgba(0, 0, 0, 0.75) 1px 1px"
            }}
          >
            <a
              href="nacion/politica/estos-fueron-los-resultados-electorales-en-mexico-2021"
              target="_self"
              rel="bookmark"
              className="p-0 m-0 font-semibold tracking-wider leading-3 text-center text-white uppercase hover:cursor-pointer hover:text-sky-800 font-['Work_Sans']"
              style={{
                outline: 0,
                textDecoration: "none",
                fontSize: '11px',
                textShadow: "rgba(0, 0, 0, 0.75) 1px 1px 0px"
              }}
            >
              VER
            </a>
          </button>
        </h3>
      </div>
    </picture>
  )
}