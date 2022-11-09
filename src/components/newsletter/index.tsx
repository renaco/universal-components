import { Fragment, useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Axios } from 'axios';

export const NewsLetter = () => {
  const urlMail = 'https://newsletterdev.eluniversal.com.mx/v1/newsletter/register-new-user';
  const logoNewsLetter = 'https://www.viveusa.mx/sites/all/modules/widget_newsletter/css/logo-viveusa.svg'

  const [buttonStatus, setButtonStatus] = useState(true);

  const handleStatusButton = (value: any) => {
    setButtonStatus(true);
    console.log(buttonStatus);
    console.log(value);
  }

  const handleSubscription = (value: any) => {
    console.log('handleSubscription', value);
  }

  useEffect(() => {
    console.log('urlMail', urlMail)
  })
  return (
    <Fragment>
      <div className="contenedor-gral-widget">
        <div className="gridheader">
          <img src={logoNewsLetter} alt="viveusa logo" className="logo-top" style={{ display: 'block' }} />
          <div className="texto-cabeza">Newsletter</div>
        </div>
        <p className="texto-principal news-email-send-ok" 
          data-gtm-vis-first-on-screen-37354430_60="184455" 
          data-gtm-vis-recent-on-screen-37354430_60="1069624" 
          data-gtm-vis-total-visible-time-37354430_60="100" 
          data-gtm-vis-has-fired-37354430_60="1"
        >Gracias por registrarte, te enviamos un correo para confirmar tu dirección.</p>
        <div style={{ clear: 'both' }}></div>
        <div
          className="widgetnw"
          style={{ bottom: "10px" }}>
          <form
            className="formgrid"
            id="register-form-newsletter-11">
            <div className="input-box texto">
              <input type="hidden" id="form_newsletter_info" value="" className="desktop" />
              <input type="hidden" id="type_input_11" value="nwsl311" />
              <input className="inputwg" type="email" placeholder="TU E-MAIL" required id="email_input_11" />
              <button type="submit" value="" className="btnWidgetNews" disabled={buttonStatus} onClick={handleSubscription}>Suscribirme</button>
              <span className="disclaimer">Al registrarme acepto los <a rel="noreferrer" href="https://www.eluniversal.com.mx/politicas-de-privacidad" target="_blank" className="linktyc">términos y condiciones</a></span>
            </div>
          </form>
          <ReCAPTCHA
            sitekey="6LeKyu4iAAAAAKbGfVcG7mMtNNAy6rivGN3D-iSX"
            onChange={handleStatusButton}
          ></ReCAPTCHA>
        </div>
      </div>
    </Fragment>
  )
}
