import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styled from "styled-components";
import Header from "../components/Header";
import Icon from "../components/Icon";
import { connectToDatabase } from "../util/mongodb";

const Main = styled.main`
  .banner {
    background-image: url("/images/banner-adidas2.webp");
    height: calc(100vh - 125px);
    background-repeat: no-repeat;
    background-position: center;
    background: ;
    background-size: cover;
    display: flex;
    align-items: center;
    padding: 60px;

    h2 {
      color: #fff;
      font-size: 3rem;
    }

    p {
      color: #fff;
      font-size: 1.5rem;
    }

    button {
      border: none;
      background-color: #fff;
      margin: 20px 0;
      padding: 10px;
      font-size: 1.2rem;
      font-weight: bold;
      box-shadow: 5px 5px 0 0 gray;
      cursor: pointer;
    }
  }

  .categories {
    background-color: #edf0f5;
    display: flex;
    justify-content: space-evenly;
    padding: 80px 20px;

    .image {
      position: relative;
      width: 20%;

      &:hover {
        .cover {
          max-height: 260px;
        }
      }

      img {
        width: 100%;
      }
    }

    .cover {
      background-color: rgba(255, 255, 255, 0.6);
      height: 100%;
      width: 100%;
      max-height: 0;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: bold;
      text-transform: uppercase;
      color: #3e3c3c;
      overflow: hidden;
      transition: all 0.4s ease-in-out;
    }
  }
`;

const Footer = styled.footer`
  border-top: 1px solid #edf0f5;
  height: 300px;
  padding: 20px 0;

  .bottom {
    background-color: #edf0f5;
    height: 80px;
  }
`;

export default function Home({ isConnected }) {
  return (
    <>
      <Header />
      <Main>
        <section className="banner">
          <div className="info">
            <h2>You + on the catch</h2>
            <p>New boots Predator Freak. Only in stores and Adidas website.</p>
            <button>
              Exclusive offer <Icon icon={faLongArrowAltRight} />
            </button>
          </div>
        </section>
        <section className="categories">
          <figure className="image">
            <a href="#">
              <img src="/images/banner-secundario-1.jpg" alt="Soccer" />
              <div className="cover">Soccer</div>
            </a>
          </figure>
          <figure className="image">
            <a href="#">
              <img src="/images/banner-secundario-2.jpg" alt="Casual" />
              <div className="cover">Casual</div>
            </a>
          </figure>
          <figure className="image">
            <a href="#">
              <img src="/images/banner-secundario-3.jpg" alt="Winter" />
              <div className="cover">Winter</div>
            </a>
          </figure>
          <figure className="image">
            <a href="#">
              <img src="/images/banner-secundario-4.jpg" alt="Summer" />
              <div className="cover">Summer</div>
            </a>
          </figure>
        </section>
      </Main>

      <Footer>
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
      </Footer>
    </>
  );
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase();

  const isConnected = await client.isConnected();

  return {
    props: { isConnected },
  };
}
