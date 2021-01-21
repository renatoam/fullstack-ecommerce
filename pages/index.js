import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHeart,
  faLongArrowAltRight,
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styled from "styled-components";
import { connectToDatabase } from "../util/mongodb";

const Header = styled.header`
  border-bottom: 1px solid #f3f3f4;
  height: 125px;
  padding: 20px;

  h1 {
    a {
      text-transform: uppercase;
      color: #25262a;
      letter-spacing: 0.2em;
      font-size: 20px;
      padding: 5px 30px;
      border: 2px solid #25262a;
    }
  }

  .container {
    height: 100%;
    justify-content: space-between;

    section {
      align-items: center;
      display: flex;
      justify-content: center;

      &:not(:nth-child(2)) {
        flex: 1 1 30%;
      }

      &:nth-child(2) {
        flex: 2 1 40%;
      }

      &:last-child {
        gap: 15px;
      }
    }
  }

  input {
    border: none;
    height: 40px;
    padding-left: 40px;
    font-size: 1.2rem;
    line-height: 1.5;
  }

  .cart {
    position: relative;

    span {
      position: absolute;
      top: -15px;
      right: -15px;
      font-size: 13px;
      width: 24px;
      height: 24px;
      line-height: 24px;
      border-radius: 50%;
      display: block;
      text-align: center;
      background-color: #7971ea;
      color: #fff;
      transition: 0.2s all ease-in-out;
    }
  }
`;

const CustomIcon = styled(FontAwesomeIcon)`
  color: #868995;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.4s ease-in-out;

  &:hover {
    color: #3d3f45;
    transform: translateY(-2px);
  }
`;

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

function Icon({ icon, count, ...props }) {
  return (
    <>
      {count ? (
        <div className="cart">
          <CustomIcon icon={icon} {...props} />
          {count > 0 && <span>{count}</span>}
        </div>
      ) : (
        <CustomIcon icon={icon} {...props} />
      )}
    </>
  );
}

export default function Home({ isConnected }) {
  return (
    <>
      <Header>
        <div className="container">
          <section className="search">
            <Icon icon={faSearch} />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
            />
          </section>
          <section>
            <h1>
              <a href="#">Lójia</a>
            </h1>
          </section>
          <section>
            <Icon icon={faUser} />
            <Icon icon={faHeart} />
            <Icon icon={faShoppingCart} count={2} />
          </section>
        </div>
      </Header>

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
        <div></div>
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
