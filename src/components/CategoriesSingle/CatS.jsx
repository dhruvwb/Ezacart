import "./catS.css";

export const CatS = ({item}) => {
  return <div className="catContainer">
  <div className="CatImg">
      <img src={item.img} alt="" className="catImage" />
  </div>
  </div> ;
};
