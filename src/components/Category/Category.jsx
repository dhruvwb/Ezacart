import { categorie } from "../../data";
import { Cat } from "./Cat";
import "./category.css";

export const Category = () => {
  return (
    <div className="container">
      {categorie.map((item) => (
        <Cat item={item} key={item.id} />
      ))}
    </div>
  );
};
