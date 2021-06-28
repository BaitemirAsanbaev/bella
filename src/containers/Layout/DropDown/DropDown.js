import classes from "./DropDown.module.scss"

const DropDown = () => {
  return ( <div className={classes.DropDown}>
    <span>Мои заказы</span>
    <span>Профиль</span>
    <div></div>
    <span>Выйти</span>
  </div> );
}
 
export default DropDown;