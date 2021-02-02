
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styled from "styled-components";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Icon from "../components/Icon";
import { connectToDatabase } from "../util/mongodb";

const Main = styled.main`
  .banner {
    background-image: url("/images/banner-adidas2.webp");
    height: calc(100vh - 125px);
    background-repeat: no-repeat;
    background-position: center;
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

        <Categories />

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
