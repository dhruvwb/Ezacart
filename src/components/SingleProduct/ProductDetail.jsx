import { Add, Remove } from "@material-ui/icons";
import "./productdetail.css";

export const ProductDetail = () => {
  return (
    <div>
      <div className="prodContainer">
        <div className="ImgContainer">
          <img
            src="https://i.ibb.co/S6qMxwr/jean.jpg"
            alt=""
            className="prodImage"
          />
        </div>
        <div className="InfoContainer">
          <h1 className="prodTitle">Denim Jumpsuit</h1>
          <span className="prodDesc">
            The portal shall work tirelessly not only for the consumer
            convenience and benefit, but will also play a key role in providing
            transparent markets for all the wonderful medium and small scale
            industries located in our beautiful state. Traditionally, the state
            is not very well known for its entrepreneurial zeal.
          </span>
          <span className="prodPrice">$ 50</span>
          <div className="FilterContainer">
            <div className="prodFilter">
              <span className="FilterTitle">Color</span>
              <div className="FilterColor" color="darkblue" />

              <div className="FilterColor" color="gray" />
            </div>

            <div className="Filter">
              <span className="FilterTitle">Size</span>
              <select name="" id="" className="FilterSize">
                <option value="" className="FilterSizeOption">
                  XS
                </option>

                <option value="" className="FilterSizeOption">
                  XL
                </option>

                <option value="" className="FilterSizeOption">
                  S
                </option>

                <option value="" className="FilterSizeOption">
                  L
                </option>

                <option value="" className="FilterSizeOption">
                  XXL
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="prodAddContan">
        <div className="prodAmountContainer">
          <Remove />
          <span className="prodAmount">1</span>
          <Add />
        </div>

        <button className="Button">ADD TO CART</button>
      </div>
    </div>
  );
};
