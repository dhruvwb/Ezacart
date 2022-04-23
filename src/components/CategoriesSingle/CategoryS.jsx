import { categories } from "../../data";
import "./categoryS.css";
import { CatS } from "./CatS";

export const CategoryS = () => {
  return <div className="cWrapper">
           {categories.map((item) => (
        <CatS item={item} key={item.id} />
      ))}
  </div>;
};
