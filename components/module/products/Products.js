import Product from "./Product";
import classes from "./Products.module.css";
import { products } from "@/data/Products";

const Products = () => {
  return (
    <div className={classes.form}>
      {products.map((item) => (
        <li key={item.id}>
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            image={item.image}
            category={item.category}
            rate={item.rating.rate}
            count={item.rating.count}
          />
        </li>
      ))}
    </div>
  );
};
export default Products;
