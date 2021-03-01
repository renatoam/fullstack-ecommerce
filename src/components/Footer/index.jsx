import Image from "next/image";
import Icon from "../Icon";
import { useState } from "react";

import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { StyledFooter } from "./styles";
import { faEnvelope, faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";

function Accordion(props) {
  const { className, children, ...rest } = props;
  const [display, setDisplay] = useState("");
  const nameClass = `${className} ${display}`;

  function handleDisplayContent() {
    const isOpen = display === "open" ? "" : "open";
    setDisplay(isOpen);
  }

  return (
    <section onClick={handleDisplayContent} className={nameClass} {...rest}>
      {children}
    </section>
  )
}

export default function Footer() {
  return (
    <StyledFooter>
      <section className="up">
        <div className="container">
          <Accordion className="contact">
            <h2>Contato</h2>
            <div>
              <Icon icon={faFacebook} />
              <Icon icon={faInstagram} />
              <Icon icon={faYoutube} />
            </div>
            <div>
              <Icon icon={faMapMarker} />
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div>
              <Icon icon={faPhone} />
              <p>+2 392 3929 210</p>
            </div>
            <div>
              <Icon icon={faEnvelope} />
              <p>emailaddress@domain.com</p>
            </div>
          </Accordion>

          <Accordion className="institutional">
            <h2>Institucional</h2>
            <ul>
              <li>Marca</li>
              <li>Lojas</li>
              <li>Contato</li>
            </ul>
          </Accordion>
          <Accordion className="information">
            <h2>Informações</h2>
            <ul>
              <li>Formas de Pagamento</li>
              <li>Trocas e devoluções</li>
              <li>Cuidados com o produto</li>
            </ul>
          </Accordion>
          <Accordion className="about">
            <h2>Conheça</h2>
            <ul>
              <li>Franquias e multimarca</li>
              <li>Trabalhe com a gente</li>
              <li>Procon-SP</li>
            </ul>
          </Accordion>
          <Accordion className="news">
            <h2>Assine nossa newsletter</h2>
            <div className="newsletter">
              <label htmlFor="email">Informe seu e-mail!</label>
              <div className="send">
                <input type="email" name="email" placeholder="E-mail..." />
                <button>Send</button>
              </div>
            </div>
          </Accordion>
        </div>
      </section>
      <section className="bottom">
        <div className="container">
          <p>Copyright ©2021 All rights reserved</p>
          <p>
            Inspired by Shopper from
            <a href="https://colorlib.com/preview/#shoppers">Colorlib</a>
          </p>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <Image
              width="80"
              height="auto"
              src="/vercel.svg"
              alt="Vercel Logo"
            />
          </a>
        </div>
      </section>
    </StyledFooter>
  )
}
