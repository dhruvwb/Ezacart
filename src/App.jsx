import { Announcement } from "./components/Announcement/Announcement";
import { Cart } from "./components/Cart/Cart";
import { CategoryS } from "./components/CategoriesSingle/CategoryS";
import { Category } from "./components/Category/Category";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Product } from "./components/Product/Product";
import { ProductDetail } from "./components/SingleProduct/ProductDetail";
import { Table } from "./components/Table/Table";

const App = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <br />
      <CategoryS />
      <br />

      <Table />
      <br />

      <Footer />
      <br />

      <Category />
      <br />

      <Product />
      <br />

      <Cart />
      <br />

      <ProductDetail />
    </div>
  );
};

export default App;
