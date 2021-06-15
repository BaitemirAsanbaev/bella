import classes from "./Backdrop.module.scss";

const Backdrop = ({ show, click }) => {
  return (
    show ? <div className={classes.Backdrop} onClick={click}>Backdrop</div> : null
  );
}

export default Backdrop;