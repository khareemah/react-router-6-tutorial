import { Link } from "react-router-dom";
import products from "../data";
const Products = () => {
  return (
    <>
      <section className="products">
        {products.map((product) => {
          const { id } = product;
          return (
            <article key={id}>
              <Link to={`/products/${id}`}>more info</Link>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Products;
