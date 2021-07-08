import { Link } from "react-router-dom";
import classes from "./DropDown.module.scss"

const DropDown = ({profile}) => {
  return ( <div className={classes.DropDown}>
    <Link onClick={profile} to="/orders">Мои заказы</Link>
    <Link onClick={profile} to="profile">Профиль</Link>
    <div></div>
    <Link onClick={profile} to="/">Выйти</Link>
  </div> );
}
 
export default DropDown;