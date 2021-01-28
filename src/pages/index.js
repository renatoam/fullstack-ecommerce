
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
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

      <Footer />

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
