import classes from "./Nav.module.scss"
import logo from "../../assests/images/bella-logo.svg"
import search_icon from "../../assests/images/search-icon.svg"
import like_icon from "../../assests/images/like-icon.svg"
import profile_icon from "../../assests/images/profile-icon.svg"
import basket_icon from "../../assests/images/basket-icon.svg"
import { NavLink } from "react-router-dom";
const Nav = () => {
  return ( <nav className={classes.Nav}>
    <div className={classes.drawerItems}>
      <ul>
        <li><NavLink to="/collections" activeStyle={{color: '#2B2A2A'}} exact={true}>Товары</NavLink></li>
        <li><NavLink to="/about-us" activeStyle={{color: '#2B2A2A'}}>О нас</NavLink></li>
        <li><NavLink to="/news" activeStyle={{color: '#2B2A2A'}}>Новости</NavLink></li>
        <li><NavLink to="/delivery" activeStyle={{color: '#2B2A2A'}}>Доставка</NavLink></li>
        <li><NavLink to="/contacts" activeStyle={{color: '#2B2A2A'}}>Контакты</NavLink></li>
      </ul>
    </div>
    
    <div className={classes.logoDiv}>
      <img alt="logo" src={logo}/>
    </div>
    <div>
      <ul>
        <li><NavLink className={classes.search} to="/search" activeStyle={{color: '#AB844A'}}><img alt="icon" src={search_icon}/><span>Поиск</span></NavLink></li>
        <li><NavLink className={classes.saved} to="/saved" activeStyle={{color: '#AB844A'}}><img alt="icon" src={like_icon}/><span>Избранное</span></NavLink></li>
        <li><NavLink className={classes.profile} to="/profile" activeStyle={{color: '#AB844A'}}><img alt="icon" src={profile_icon}/><span>Профиль</span></NavLink></li>
        <li><NavLink className={classes.basket} to="/busket" activeStyle={{color: '#AB844A'}}><img alt="icon" src={basket_icon}/><span>Корзина</span></NavLink></li>
      </ul>
    </div>
  </nav> );
}
 
export default Nav;