import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = ({ data }) => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');
   const [error, setError] = useState('');
   const [sended, setSended] = useState(false);

   // Email validation
   const emailRegex = RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

   // Form validation
   const formValid = () => {
      return name.length > 0 && message.length > 0 && emailRegex.test(email);
   };

   const handleClick = (e) => {
      e.preventDefault();

      if (formValid()) {
         emailjs.send("service_zzspttp", "template_2xyl8qp", {
            email: email,
            name: name,
            message: message,
         }, "EhL7ALdCFAShkR2wx");
         setName('');
         setEmail('');
         setMessage('');
         setSended(true);
      } else {
         setError("You must fill the form correctrly!!!");
      }
   }


   return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Ponerse en contacto.</span></h1>

            </div>

            <div className="ten columns">

               <p className="lead">{data?.message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form id="contactForm" name="contactForm">
                  <fieldset>

                     <div>
                        <label htmlFor="contactName">Nombre <span className="required">*</span></label>
                        <input value={name} type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={e => setName(e.target.value)} />
                     </div>

                     <div>
                        <label htmlFor="contactEmail">Correo <span className="required">*</span></label>
                        <input value={email} type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={e => setEmail(e.target.value)} />
                     </div>

                     <div>
                        <label htmlFor="contactMessage">Mensage <span className="required">*</span></label>
                        <textarea value={message} onChange={e => setMessage(e.target.value)} cols="50" rows="5" id="contactMessage" name="contactMessage"></textarea>
                     </div>

                     <div>
                        {(sended) ?
                           <span>Gracias por tu mensaje. Me pondré en contacto contigo pronto.</span>
                           :
                           <>
                              <button type='submit' onClick={handleClick} className="submit">Enviar</button>
                              <span> {error}</span>
                           </>
                        }
                     </div>
                  </fieldset>
               </form>

               <div id="message-warning"> Pequeño error.</div>
               <div id="message-success">
                  <i className="fa fa-check"></i>Su mensaje fue enviado, gracias!<br />
               </div>
            </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

                  <h4>Dirreción y Teléfono</h4>
                  <p className="address">
                     {data?.name}<br />
                     {data?.address.city}, {data?.address.state}, {data?.address.country}<br />
                     <span>{data?.phone}</span><br />
                     {data?.email}
                  </p>
               </div>

               <div className="widget widget_tweets">

               </div>
            </aside>
         </div>
      </section>
   );
}

export default Contact;
