import './product.css'
import { popularProducts } from "../../data";
import { Pro } from "./Pro";

export const Product = () => {
  return <div className="product">
       {popularProducts.map((item) =>(
        <Pro item={item} key={item.id} />
    ))}

  </div>;
};
