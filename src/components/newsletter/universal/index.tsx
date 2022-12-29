import React from "react";

const UniversalNewsletter = () => {
  return (
    <div
      className="p-4 mx-auto mt-0 mb-5 h-40 font-sans text-white bg-no-repeat"
      style={{
        maxWidth: 1100,
        backgroundImage:
          'url("https://www.eluniversal.com.mx/sites/default/files/back-widget.jpg")'
      }}
    >
      <div
        className="py-0 px-2 w-auto text-sky-800"
        style={{ gridColumn: "span 9 / auto" }}
      >
        <img
          src="https://www.eluniversal.com.mx/interactivos/especial/newsletter/el-universal-logo.svg"
          alt="El Universal"
          className="block float-left p-0 mt-0 mr-4 mb-1 ml-0 w-24 h-20 text-white"
          style={{ display: "block", outline: 0, filter: "saturate(1.15)" }}
        />
        <div
          className="p-0 mt-1 mr-2 mb-4 ml-0 text-3xl font-medium leading-6 text-white"
          style={{ outline: 0 }}
        >
          Newsletter Al Despertar
        </div>
        <p
          className="p-0 mx-0 mt-2 mb-0 text-base text-white"
          id="subtituloline_1"
          style={{ outline: 0 }}
        >
          Tu guía para comprender el acontecer noticioso al arrancar el día
        </p>
      </div>
      <form
        className="float-right mt-2 w-full text-center text-white"
        id="register-form-newsletter-1"
      >
        <div className="float-right mt-2 w-full text-center text-white">
          <input
            className="p-1 m-0 h-5 font-sans text-sm text-black border border-solid cursor-text border-neutral-400"
            type="email"
            placeholder="TU E-MAIL"
            required
            id="email_input_1"
            style={{
              outline: 0,
              borderRadius: "5px 0px 0px 5px",
              maxWidth: 300,
              textIndent: 5,
              width: "48%"
            }}
          />
          <button
            type="submit"
            value=""
            className="py-2 px-4 my-0 mr-0 -ml-2 font-sans text-sm font-semibold tracking-wider text-center text-black-0 uppercase bg-yellow-100 border-0 border-solid cursor-default border-zinc-300"
            style={{
              outline: 0,
              borderRadius: "0px 5px 5px 0px",
              transition: "all 0.4s ease-out 0s"
            }}
          >
            Registrarme
          </button>
        </div>
        <span
          className="p-0 m-0 text-center text-blue-100"
          style={{ outline: 0, fontSize: 11 }}
        >
          Al registrarme acepto los
          <a
            rel="noreferrer"
            href="https://www.eluniversal.com.mx/politicas-de-privacidad"
            target="_blank"
            className="p-0 m-0 text-center text-blue-100 hover:cursor-pointer hover:text-blue-100"
            style={{ outline: 0, textDecoration: "underline", fontSize: 11 }}
          >
            términos y condiciones
          </a>
        </span>
      </form>
    </div>

  )
}

export default UniversalNewsletter;