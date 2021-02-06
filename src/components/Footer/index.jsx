import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { StyledFooter } from "./style";
import Icon from "../Icon";

export default function Footer() {
  return (
    <StyledFooter>
      <section className="up">
        <div className="container">
          <section>
            <Icon icon={faFacebook} />
            <Icon icon={faInstagram} />
            <Icon icon={faYoutube} />
          </section>
          <section>
            <h2>Institucional</h2>
            <ul>
              <li>Marca</li>
              <li>Lojas</li>
              <li>Contato</li>
            </ul>
          </section>
          <section>
            <h2>Informações</h2>
            <ul>
              <li>Formas de Pagamento</li>
              <li>Trocas e devoluções</li>
              <li>Cuidados com o produto</li>
            </ul>
          </section>
          <section>
            <h2>Conheça</h2>
            <ul>
              <li>Franquias e multimarca</li>
              <li>Trabalhe com a gente</li>
              <li>Procon-SP</li>
            </ul>
          </section>
          <section>
            <h2>Assine nossa newsletter</h2>
            <fieldset>
              <legend>Informe seu melhor e-mail!</legend>
              <input type="email" name="email" placeholder="E-mail..." />
            </fieldset>
          </section>
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
            Powered by{" "}
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
  );
}