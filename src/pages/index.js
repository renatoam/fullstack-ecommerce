
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import Header from "../modules/shared/components/Header";
import Categories from "../modules/shared/components/Categories";
import Footer from "../modules/shared/components/Footer";
import Icon from "../modules/shared/components/Icon";
import { client } from "../util/mongodb";
import { Main } from "../modules/shared/styles/global";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Home({ products }) {
  const { esteite, incr } = useSelector(state => state)
  const dispatch = useDispatch()

  function addOneToState() {
    dispatch({
      type: 'ADD',
      payload: 1
    })
  }

  useEffect(() => {
    if (!esteite) dispatch({ type: 'EXAMPLE', payload: 'Example of a new state' })

    console.log({ products: JSON.parse(products) });
    
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
  const { MONGODB_COLLECTION, MONGODB_DB } = process.env;
  const mongodb = await client.connect();

  const products = await mongodb.db(MONGODB_DB)
    .collection(MONGODB_COLLECTION)
    .find()
    .limit(20)
    .toArray()  

  return {
    props: { products: JSON.stringify(products) },
  };
}
