import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import './pro.css'

export const Pro = ({item}) => {
  return (
    <div className="proConainer">
        <div className="pCircle" />
        <img src={item.img} alt="" className="proImg" />
        <div className="proInfo">
        <div className="proIcon"><ShoppingCartOutlined /></div>
        <div className="proIcon"><SearchOutlined /></div>
        <div className="proIcon"><FavoriteBorderOutlined /></div>
        </div>
    </div>
  )
}
