import "./tale.css";

export const Tale = ({ item }) => {
  return (
    <div className="Box2">
      <div className="Boxleft">
        <ul className="leftul">
          <li className="leftli">{item.name}</li>
          <li className="leftli">{item.name}</li>
          <li className="leftli">{item.name}</li>
          <li className="leftli">{item.name}</li>
          <li className="leftli">{item.name}</li>
          <li className="leftli">{item.name}</li>
          <li className="leftli">{item.name}</li>
          <li className="leftli">{item.name}</li>
          <li className="leftli">{item.name}</li>
          <li className="leftli">{item.name}</li>
          <li className="leftli">{item.name}</li>
          <li className="leftli">{item.name}</li>
        </ul>
      </div>
      <div className="BoxCenter">
        <ul className="centerul">
          <h3 className="centerheading">{item.name}</h3>
          <li className="centerli">
            <img src={item.img} alt="" className="centerimg" />
            <div className="centerInfo">
              <span className="centertitle">{item.title}</span>
              <br />
              <span className="centerquantity">per {item.quantity}</span>
              <br />
              <span className="centerprice">{item.price}</span>
              <button className="centerbtn">ADD +</button>
            </div>
          </li>

          <li className="centerli">
            <img src={item.img} alt="" className="centerimg" />
            <div className="centerInfo">
              <span className="centertitle">{item.title}</span>
              <br />
              <span className="centerquantity">per {item.quantity}</span>
              <br />
              <span className="centerprice">{item.price}</span>
              <button className="centerbtn">ADD +</button>
            </div>
          </li>
        </ul>
      </div>
      <div className="Boxright">
        <ul className="rightul">
          <h3 className="centerheading">Bag</h3>
          <li className="rightli"></li>
        </ul>
      </div>
    </div>
  );
};
