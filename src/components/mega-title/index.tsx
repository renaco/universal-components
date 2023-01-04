import React from 'react';

const MegaTitle = () => {
  return <>
    <div className="p-1.5 m-0 bg-[#d01] text-sky-800" style={{ outline: 0 }}>
      <h2 className="table m-auto w-11/12 text-sm md:text-2xl not-italic font-semibold leading-6 text-center text-white uppercase font-['Work_Sans']">
        Qatar
      </h2>
    </div>
    <h2
      className="py-5 px-0 m-auto text-center break-word"
      style={{ gridArea: "2 / 1 / 3 / 3" }}
    >
      <a
        href="mundial-futbol/paises-bajos-qatar-en-vivo-fase-de-grupos-del-mundial-qatar-2022"
        target="_self"
        className="inline p-0 mb-6 text-4xl md:text-[80px] text-center break-words text-[#3a405b] hover:cursor-pointer hover:text-sky-800 font-['Work_Sans'] no-underline font-bold leading-none"
        style={{ outline: 0 }}
      >
        Qatar 2022: Países Bajos vence a Qatar y clasifica a los octavos de final
      </a>
    </h2>
    <div
      className="flex justify-center m-0 w-full text-sky-800"
      style={{ outline: 0 }}
    >
      <img
        className="block p-0 w-full cursor-pointer text-sky-800 hover:opacity-90"
        src="https://calidad.eluniversal.com.mx/sites/default/files/2022/11/29/paises-bajos-mundial-octavos.jpg"
        alt="Qatar 2022: Países Bajos vence a Qatar y clasifica a los octavos de final"
        style={{
          outline: 0,
          filter: "saturate(1.15)",
          transition: "all 0.3s ease-out 0s"
        }}
      />
    </div>
  </>
}

export default MegaTitle;