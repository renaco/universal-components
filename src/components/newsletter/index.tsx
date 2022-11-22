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
  const validation = {
    error: '',
    format: 'Formato invalido'
  }
  const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const [validateEmail, setValidateEmail] = useState<Boolean>(false);
  const [captchaChecked, setCaptchaChecked] = useState<Boolean>(false);
  const [message, setMessage] = useState<String>(messages.default);
  const [subscriptor, setSubscriptor] = useState<Subscriptor>({
    email: '',
    nws: 'nwsl37'
  });

  const handleCaptchaCheck = (value: string | null) => {
    let isCaptchaChecked = value !== undefined;
    setCaptchaChecked(isCaptchaChecked);
    validateEmailAndCheck();
  }

  const handleCheckEmailSubscriptor = (e: any) => {
    let email = e.target.value;
    let isValidEmail = emailRegEx.test(email);
    if (isValidEmail && email.length > 0) {
      setSubscriptor({ ...subscriptor, email: email });
    }
    setValidateEmail(isValidEmail);
    validateEmailAndCheck();
  }

  const handleSendSubscription = () => {
    axios.post(urlMail, subscriptor)
      .then((response) => {
        setMessage(messages.success);
      })
  }

  const validateEmailAndCheck = () => {
    return !(validateEmail === captchaChecked);
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
        >{message}</p>
        <form
          className="flex flex-col bottom-[10px]"
          onSubmit={() => { return false }}
        >
          <div className="">
            <input
              className="py-1 px-3 border-[1px] border-solid border-grey-100 text-black-0 m-0 w-[48%] outline-0 max-w-[300px] rounded-l-lg"
              type="email"
              placeholder="TU E-MAIL"
              required
              onChange={handleCheckEmailSubscriptor}
            />
            <button
              className="bg-red-200 border-[0.5px] border-solid border-red-200 outline-0 uppercase tracking-[1px] py-1 px-3 font-[600] rounded-r-lg -ml-[7px]"
              disabled={validateEmailAndCheck()}
              onClick={handleSendSubscription}
            >Suscribirme</button>
          </div>
          {!validateEmail && <span className='text-[11px] mt-1 text-red-0'>{validation.format}</span>}
          <span
            className="text-[11px] text-grey-0 mt-2"
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
    </Fragment>
  )
}
