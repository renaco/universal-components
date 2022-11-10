import { Fragment, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

export const NewsLetter = () => {
  const urlMail = 'https://newsletterdev.eluniversal.com.mx/v1/newsletter/register-new-user';
  const logoNewsLetter = 'https://www.viveusa.mx/sites/all/modules/widget_newsletter/css/logo-viveusa.svg';
  const messages = {
    default: 'Recibe en tu correo las noticias más destacadas para viajar, trabajar y vivir en EU', 
    success: 'Gracias por registrarte, te enviamos un correo para confirmar tu dirección.'
  }
  const emailRegEx = '/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i';

  const [buttonStatus, setButtonStatus] = useState(false);
  const [message, setMessage] = useState(messages.default)
  const [subscriptor, setSubscriptor] = useState({
    email: '',
    nws: 'nwsl37'
  })

  const handleStatusButton = (value: any) => {
    setButtonStatus(true);
    console.log(buttonStatus);
    console.log(value);
  }

  const handleGetSubscriptor = (event: string) => {
    setSubscriptor({...subscriptor, email: event})
    console.log('subscriptor', subscriptor)
  }

  const handleSubscription = (event: any) => {
    event.preventDefault();
    console.log('handleSubscription', event);

    axios.post(urlMail, subscriptor)
    .then((response) => {
      console.log('response.data', response.data);
      setMessage(messages.success);
    })
  }

  return (
    <Fragment>
      <div className="contenedor-gral-widget">
        <div className="m-[10px]">
          <img src={logoNewsLetter} alt="viveusa logo" className="block w-5 logo-top" />
          <div className="texto-cabeza">Newsletter</div>
        </div>
        <p className="texto-principal news-email-send-ok"
          data-gtm-vis-first-on-screen-37354430_60="184455"
          data-gtm-vis-recent-on-screen-37354430_60="1069624"
          data-gtm-vis-total-visible-time-37354430_60="100"
          data-gtm-vis-has-fired-37354430_60="1"
        >{message}</p>
        <div style={{ clear: 'both' }}></div>
        <div
          className="widgetnw bottom-[10px]">
          <form
            // onSubmit=
            className="formgrid"
            id="register-form-newsletter-11">
            <div className="input-box texto">
              <input
                type="hidden"
                value="nwsl311"
              />
              <input
                className="inputwg"
                type="email"
                placeholder="TU E-MAIL"
                required
                onChange={(e) => {handleGetSubscriptor(e.target.value)}}
                pattern={emailRegEx}
              />
              <button
                className="btnWidgetNews"
                disabled={buttonStatus}
                onClick={handleSubscription}
              >Suscribirme</button>
              <span
                className="disclaimer"
              >Al registrarme acepto los <a rel="noreferrer" href="https://www.eluniversal.com.mx/politicas-de-privacidad"
                target="_blank"
                className="linktyc"
              >términos y condiciones</a>
            </span>
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
