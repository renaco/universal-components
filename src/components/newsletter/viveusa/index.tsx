import React from "react";

const ViveUSANewsletter = () => {
  return (
    <div
      className="p-4 mx-auto mt-0 mb-5 h-40 font-sans text-white bg-no-repeat"
      style={{
        maxWidth: 1100,
        backgroundImage:
          'url("https://www.viveusa.mx/sites/all/modules/widget_newsletter/css/back-widget.webp")',
        backgroundSize: "100% 100%"
      }}
    >
      <div
        className="grid gap-1 p-0 m-0 w-full h-12 font-sans text-white"
        style={{ outline: 0, gridTemplateColumns: "1fr 5fr" }}
      >
        <img
          src="https://www.viveusa.mx/sites/all/modules/widget_newsletter/css/logo-viveusa.svg"
          alt="viveusa logo"
          className="block float-left p-0 my-1 mr-4 ml-0 w-full h-full font-sans text-white border-0"
          style={{ display: "block", outline: 0, filter: "saturate(1.15)" }}
        />
        <div
          className="p-0 mt-1 mr-2 mb-4 ml-0 font-sans text-3xl font-medium leading-6 text-right text-white"
          style={{ outline: 0 }}
        >
          Newsletter
        </div>
      </div>
      <p
        className="p-0 my-2 mx-0 font-sans text-base text-white"
        id="subtituloline_11"
        style={{ outline: 0 }}
      >
        Recibe en tu correo las noticias más destacadas para viajar, trabajar y
        vivir en EU
      </p>
      <form
        className="float-right p-0 mx-0 mt-2 mb-0 w-full font-sans text-center text-white"
        id="register-form-newsletter-11"
      >
        <div className="float-right p-0 mx-0 mt-2 mb-0 w-full font-sans text-center text-white">
          <input
            className="p-1 m-0 h-5 font-sans text-sm text-black border border-solid cursor-text border-neutral-400"
            type="email"
            placeholder="TU E-MAIL"
            required
            id="email_input_11"
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
            className="py-2 px-4 my-0 mr-0 -ml-2 font-sans text-sm font-semibold tracking-wider text-center text-white uppercase bg-red-0 border-0 border-red-500 border-solid cursor-default"
            style={{
              outline: 0,
              borderRadius: "0px 5px 5px 0px",
              transition: "all 0.4s ease-out 0s"
            }}
          >
            Suscribirme
          </button>
        </div>
        <span
      className="inline-block p-0 mx-0 mt-2 mb-0 font-sans text-center text-blue-100"
      style={{ outline: 0, fontSize: 11 }}
    >
      Al registrarme acepto los{" "}
      <a
        rel="noreferrer"
        href="https://www.eluniversal.com.mx/politicas-de-privacidad"
        target="_blank"
        className="p-0 m-0 font-sans text-center text-blue-100 hover:cursor-pointer hover:text-blue-100"
        style={{ outline: 0, textDecoration: "underline", fontSize: 11 }}
      >
        términos y condiciones
      </a>
    </span>
      </form>
    </div>


  )
}

export default ViveUSANewsletter;