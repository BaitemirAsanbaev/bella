import classes from "./Header.module.scss"
import DrawerOpen from "../Layout/Drawer/DrawerOpen/DrawerOpen"
import Nav from "../../components/Nav/Nav"
import logo from "../../assests/images/bella-logo.svg"

const Header = ({openDrawer, startSearch}) => {
  return ( <div className={classes.Header}>
    <DrawerOpen click ={openDrawer}/>
    <div className={classes.responseLogo}>
      <img alt="logo" src={logo}/>
    </div>
    <Nav search={startSearch}/>
  </div> );
}
 
export default Header;