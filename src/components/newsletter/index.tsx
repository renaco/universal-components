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
  const [validateEmail, setValidateEmail] = useState<Boolean>(false);
  const [captchaChecked, setCaptchaChecked] = useState<Boolean>(false);
  const [buttonStatus, setButtonStatus] = useState<any>(false);
  const [message, setMessage] = useState<String>(messages.default);
  const [subscriptor, setSubscriptor] = useState<Subscriptor>({
    email: '',
    nws: 'nwsl37'
  });

  const handleCaptchaCheck = (value: string | null) => {
    let isCaptchaChecked = value !== null;
    setCaptchaChecked(isCaptchaChecked)
    checkActivateButton();
  }

  const handleCheckSubscriptor = (e: any) => {
    let email = e.target.value;
    let isValidEmail = emailRegEx.test(email);
    if (isValidEmail) {
      setSubscriptor({ ...subscriptor, email: email });
    }
    setValidateEmail(isValidEmail);
    checkActivateButton();
  }

  const checkActivateButton = () => {
    let emailChecked = validateEmail && captchaChecked;
    setButtonStatus(emailChecked);
  }

  const handleSendSubscription = () => {
    axios.post(urlMail, subscriptor)
      .then((response) => {
        console.log('response.data', response);
        setMessage(messages.success);
      })
  }

  return (
    <Fragment>
      <div className="text-[white] font-['Work_Sans'] m-[10px] p-5 bg-[length:100%_100%] bg-[url('https://www.viveusa.mx/sites/all/modules/widget_newsletter/css/back-widget.webp')]">
        <div className="my-5 flex justify-between">
          <img
            src={logoNewsLetter}
            alt="ViveUSA"
            className="block w-[60px] md:w-[120px]"
          />
          <h3 className="text-[30px] font-[500] leading-6">Newsletter</h3>
        </div>
        <p
          className="my-3 text-[17px]"
          data-gtm-vis-first-on-screen-37354430_60="184455"
          data-gtm-vis-recent-on-screen-37354430_60="1069624"
          data-gtm-vis-total-visible-time-37354430_60="100"
          data-gtm-vis-has-fired-37354430_60="1"
        >{message}</p>
        <form
          className="flex flex-col bottom-[10px]"
          onSubmit={() => { return false }}
        >
          <div className="">
            <input
              className="py-1 px-3 border-[1px] border-solid border-[#a5a5a5] text-[#000000] m-0 w-[48%] outline-0 max-w-[300px] rounded-l-lg"
              type="email"
              placeholder="TU E-MAIL"
              required
              onChange={handleCheckSubscriptor}
            />
            <button
              className="bg-[#ed313b] border-[0.5px] border-solid border-[#ed313b] uppercase tracking-[1px] py-1 px-3 font-[600] rounded-r-lg -ml-[7px]"
              disabled={!buttonStatus}
              onClick={handleSendSubscription}
            >Suscribirme</button>
          </div>
          {!validateEmail && <span className='text-[11px] mt-1 text-[#aa0000]'>Formato no valido</span>}
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
              onChange={handleCaptchaCheck}
            ></ReCAPTCHA>
          </section>
        </form>
      </div>
      validateEmail {JSON.stringify(validateEmail)} <br />
      buttonStatus {JSON.stringify(buttonStatus)}
    </Fragment>
  )
}
