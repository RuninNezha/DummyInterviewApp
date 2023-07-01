import CartModule from "./Cart";

import { carts } from "@/data/Carts";

import classes from "./Carts.module.css";

const Carts = function () {
  return (
    <div className={classes.module}>
      <div key={Math.trunc(Math.random())} className={classes.repair}>
        {carts.map((el) => (
          <CartModule
            key={el.id}
            id={el.id}
            userId={el.userId}
            date={el.date.slice(0, 10)}
            products={el.products}
          />
        ))}
      </div>
    </div>
  );
};
export default Carts;
