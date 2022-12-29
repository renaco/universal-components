import React from 'react';

const ClaseNewsLetter = () => {
  return (
    <div
      className="p-4 my-2 mx-0 h-40 font-sans text-black bg-white bg-no-repeat border-black border-solid border-y-4"
      style={{ maxWidth: 1100, backgroundSize: "100% 100%" }}
    >
      <div
        className="grid gap-1 p-0 m-0 w-full font-sans text-black"
        style={{ outline: 0, gridTemplateColumns: "1fr 5fr" }}
      >
        <img
          src="https://www.revistaclase.mx/sites/all/modules/custom/eluniversalv2/widget_newsletter/css/logo-hello.svg"
          alt="clase logo"
          className="block float-left p-0 my-1 mr-4 ml-0 w-16 h-12 font-sans text-black border-0"
          style={{ display: "block", outline: 0, filter: "saturate(1.15)" }}
        />
        <div
          className="p-0 mt-1 mr-2 mb-4 ml-0 font-sans text-3xl font-light leading-6 text-right text-black"
          style={{ outline: 0 }}
        >
          Newsletter
        </div>
      </div>
      <p
        className="py-0 px-2 mx-0 mt-2 mb-0 font-sans text-base font-extralight text-black"
        id="subtituloline_7"
      >
        Entérate de lo último en viajes, gastronomía, autos y más
      </p>
      <form
        className="float-right p-0 mx-0 mt-2 mb-0 w-full font-sans text-center text-black"
        id="register-form-newsletter-7"
      >
        <div className="float-right mt-2 w-full font-sans text-center text-black">
          <input
            className="p-1 m-0 h-5 font-sans text-sm text-black rounded-none border border-solid cursor-text border-neutral-400"
            type="email"
            placeholder="TU E-MAIL"
            required
            id="email_input_7"
            style={{ outline: 0, maxWidth: 300, textIndent: 5, width: "48%" }}
          />
          <button
            type="submit"
            value=""
            className="py-2 px-4 my-0 mr-0 -ml-2 font-sans text-sm font-semibold tracking-wider text-center text-white uppercase bg-black-0 rounded-none border-0 border-black border-solid cursor-default"
            style={{ outline: 0, transition: "all 0.4s ease-out 0s" }}
          >
            Guardar
          </button>
        </div>
        <span
          className="inline-block p-0 mx-0 mt-4 mb-0 font-sans text-center text-black"
          style={{ outline: 0, fontSize: 11 }}
        >
          Al registrarme acepto los{" "}
          <a
            rel="noreferrer"
            href="https://www.eluniversal.com.mx/politicas-de-privacidad"
            target="_blank"
            className="p-0 m-0 font-sans text-center text-black hover:cursor-pointer hover:text-black"
            style={{ outline: 0, textDecoration: "underline", fontSize: 11 }}
          >
            términos y condiciones
          </a>
        </span>
      </form>
    </div>

  )
}

export default ClaseNewsLetter;