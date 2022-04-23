import "./navbar.css";

export const Navbar = () => {
  return <div>
    <div className="nav">
        <div className="navContainer">
            <div className="navLeft">
                <h2 className="navH2">E-market</h2>
                <span className="navSpan">ezacart.com</span>
            </div>

            <div className="navCenter">
                <input className="ctrInput"  placeholder="  Search for products..." ></input>
            </div>

            <div className="navRight">
                <span className="rhtSpan"><b>Categories</b></span>
                <span className="rhtSpan"><b>Bag</b></span>
                <span className="rhtSpan"><b>Account</b></span>
                
            </div>
        </div>  
    </div>
  </div>;
};
