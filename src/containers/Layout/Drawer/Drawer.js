import { NavLink } from "react-router-dom";
import Backdrop from "../Backdrop/Backdrop";
import classes from './Drawer.module.scss';
import profile_icon from "../../../assests/images/profile-icon.svg"

const Drawer = ({ open, closeDrawer }) => {

  const drawerClasses = [
    classes.content,
    open ? classes.open : classes.close
  ];

  return (<div className={classes.Drawer}>
    <Backdrop show={open} click={closeDrawer} />
    <div className={drawerClasses.join(" ")}>
      <ul>
        <div className={classes.drawerLinks}>
          <li><NavLink to="/products" activeStyle={{color: '#2B2A2A'}} exact={true}>Товары</NavLink></li>
          <li><NavLink to="/about" activeStyle={{color: '#2B2A2A'}}>О нас</NavLink></li>
          <li><NavLink to="/news" activeStyle={{color: '#2B2A2A'}}>Новости</NavLink></li>
          <li><NavLink to="/delivery" activeStyle={{color: '#2B2A2A'}}>Доставка</NavLink></li>
          <li><NavLink to="/contacts" activeStyle={{color: '#2B2A2A'}}>Контакты</NavLink></li>
          <li><NavLink to="/saved" activeStyle={{color: '#2B2A2A'}}>Избранное</NavLink></li>
        </div>
        <div className={classes.drawerProfile}>
          <img alt="profile" src={profile_icon}/>
          <li><NavLink to="/profile" activeStyle={{color: '#2B2A2A'}}>Профиль</NavLink></li>
        </div>
      </ul>
    </div>
  </div>);
}

export default Drawer;