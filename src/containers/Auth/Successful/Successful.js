import classes from "./Successful.module.css"
import logo from '../../assets/img/Bella.svg'
const Successful = () => {
    return (
        <div className={classes.modal}>
        <div className={classes.img}><img alt="logo" src={logo} /></div>
      
        <p className={classes.p}>Поздравляем! Регистрация прошла успешно!</p>
        <form className={classes.form}>
        <button className={classes.button}>хорошо</button>
        </form>
       
   </div>
    );
}
 
export default Successful;