import React from 'react';

const Cookies = () => {
  return (
<div
  id="sliding-popup"
  className="fixed bottom-0 left-0 px-0 pt-1 pb-2 w-full h-16 font-sans text-center border-t border-solid border-zinc-400 bg-slate-500 text-sky-800"
  style={{ bottom: 0, outline: 0, zIndex: 99999 }}
>
  <div className="p-0 m-0 text-center text-sky-800" style={{ outline: 0 }}>
    <h2
      className="p-0 mx-0 mt-2 mb-1 text-base font-medium tracking-tight text-left text-white"
      style={{ outline: 0, textShadow: "rgba(0, 0, 0, 0.75) 1px 1px" }}
    >
      Al navegar en este sitio aceptas las cookies que utilizamos para mejorar
      tu experiencia
    </h2>
    <a
      href="https://www.eluniversal.com.mx/politica-de-uso-de-cookies"
      target="_self"
      className="p-0 m-0 text-base font-bold tracking-tight text-left text-white hover:cursor-pointer hover:text-sky-800"
      style={{
        outline: 0,
        textDecoration: "none",
        textShadow: "rgba(0, 0, 0, 0.75) 1px 1px"
      }}
    >
      Más información
    </a>
    <a
      href="https://www.eluniversal.com.mx/aviso-de-privacidad"
      target="_self"
      className="p-0 m-0 text-base font-bold tracking-tight text-left text-white hover:cursor-pointer hover:text-sky-800"
      style={{
        outline: 0,
        textDecoration: "none",
        textShadow: "rgba(0, 0, 0, 0.75) 1px 1px"
      }}
    >
      Aviso de privacidad
    </a>
    <button
      type="button"
      className="float-right py-2 px-3 mt-5 -ml-2 font-sans text-sm font-medium tracking-wider text-center text-white uppercase bg-none rounded-none border-0 border-solid cursor-pointer border-zinc-300 bg-sky-700"
      style={{
        transition: "all 0s ease 0s",
        boxShadow: "none",
        textShadow: "none"
      }}
    >
      Acepto
    </button>
  </div>
</div>
  )
}

export default Cookies;