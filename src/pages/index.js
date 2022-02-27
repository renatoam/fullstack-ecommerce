
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Icon from "../components/Icon";
// import { connectToDatabase } from "../util/mongodb";
import { Main } from "../styles/global";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Home({ isConnected }) {
  const { esteite, incr } = useSelector(state => state)
  const dispatch = useDispatch()

  function addOneToState() {
    dispatch({
      type: 'ADD',
      payload: incr + 1
    })
  }

  useEffect(() => {
    if (!esteite) dispatch({ type: 'EXAMPLE', payload: 'Example of a new state' })
    console.log(esteite, incr)
  }, [esteite, incr])

  return (
    <>
      <Header />
      <button onClick={addOneToState}>Redux</button>
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
  // const { client } = await connectToDatabase();

  // const isConnected = await client.isConnected();
  const isConnected = true;

  return {
    props: { isConnected },
  };
}
