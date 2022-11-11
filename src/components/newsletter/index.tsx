import { Fragment, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

export const NewsLetter = () => {

  interface Subscriptor {
    email: string;
    nws: string;
  }

  const urlMail = 'https://newsletterdev.eluniversal.com.mx/v1/newsletter/register-new-user';
  const logoNewsLetter = 'https://www.viveusa.mx/sites/all/modules/widget_newsletter/css/logo-viveusa.svg';
  const messages = {
    default: 'Recibe en tu correo las noticias más destacadas para viajar, trabajar y vivir en EU',
    success: 'Gracias por registrarte, te enviamos un correo para confirmar tu dirección.'
  }
  const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const [validateEmail, setValidateEmail] = useState(false);
  const [buttonStatus, setButtonStatus] = useState(true);
  const [message, setMessage] = useState(messages.default);
  const [subscriptor, setSubscriptor] = useState<Subscriptor>({
    email: '',
    nws: 'nwsl37'
  })

  const handleStatusButton = (value: string | null) => {
    let isCaptchaChecked = value !== null;
    console.log(isCaptchaChecked);
    if (validateEmail && isCaptchaChecked) {
      setButtonStatus(false);
    }
  }

  const handleCheckSubscriptor = (email: string) => {
    setValidateEmail(emailRegEx.test(subscriptor.email));
    setSubscriptor({ ...subscriptor, email: email });
    console.log('validate email', validateEmail);
    // validateEmail ? setButtonStatus(true) : setButtonStatus(false);
  }

  const handleSendSubscription = () => {
    // event.preventDefault();

    axios.post(urlMail, subscriptor)
      .then((response) => {
        console.log('response.data', response.data);
        setMessage(messages.success);
      })
  }

  return (
    <Fragment>
      <div className="contenedor-gral-widget m-[10px] p-5">
        <div className="my-5 flex justify-between">
          <img src={logoNewsLetter} alt="viveusa logo" className="block w-[60px] md:w-[120px]" />
          <h3 className="texto-cabeza">Newsletter</h3>
        </div>
        <p
          className="texto-principal news-email-send-ok"
          data-gtm-vis-first-on-screen-37354430_60="184455"
          data-gtm-vis-recent-on-screen-37354430_60="1069624"
          data-gtm-vis-total-visible-time-37354430_60="100"
          data-gtm-vis-has-fired-37354430_60="1"
        >{message}</p>
        <div
          className="bottom-[10px]">
          <form
            className="flex flex-col"
            id="register-form-newsletter-11">
            <div className="">
              <input
                className="inputwg"
                type="email"
                placeholder="TU E-MAIL"
                required
                onChange={(e) => { handleCheckSubscriptor(e.target.value) }}
              />
              <button
                className=""
                disabled={buttonStatus}
                onClick={handleSendSubscription}
              >Suscribirme</button>
            </div>
            {!validateEmail && <span className='text-[10px] text-[#aa0000]'>Formato no valido</span>}
            <span
              className="text-[11px] text-[#d3eefd] mt-2"
            >Al registrarme acepto los <a rel="noreferrer" href="https://www.eluniversal.com.mx/politicas-de-privacidad"
              target="_blank"
              className="underline"
            >términos y condiciones</a>
            </span>
            <section className="flex justify-center mt-4">
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={handleStatusButton}
              ></ReCAPTCHA>
            </section>
          </form>
        </div>
      </div>
    </Fragment>
  )
}
