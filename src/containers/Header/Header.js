import classes from "./Header.scss"
import DrawerOpen from "../Layout/Drawer/DrawerOpen/DrawerOpen"

const Header = ({openDrawer}) => {
  return ( <div className={classes.Header}>
    <DrawerOpen click ={openDrawer}/>
  </div> );
}
 
export default Header;