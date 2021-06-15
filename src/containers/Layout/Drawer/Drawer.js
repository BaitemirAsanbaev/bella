import Nav from "../../../components/Nav/Nav"
import Backdrop from "../Backdrop/Backdrop";
import classes from './Drawer.module.scss';

const Drawer = ({ open, closeDrawer }) => {

  const drawerClasses = [
    classes.content,
    open ? classes.open : classes.close
  ];

  return (<div className={classes.Drawer}>
    <Backdrop show={open} click={closeDrawer} />
    <div className={drawerClasses.join(" ")}>
      <Nav click={closeDrawer} />
    </div>
  </div>);
}

export default Drawer;