import "./cat.css";

export const Cat = ({ item }) => {
  return (
    <div className="Container">
      <img src={item.img} alt="" className="Image" />
      <div className="Info">
        <span className="Title">{item.title}</span>
        <p className="desc">{item.desc}</p>
        <button className="button">Shop Now</button>
      </div>
    </div>
  );
};
