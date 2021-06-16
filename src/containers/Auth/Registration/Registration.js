import classes from "./Registration.module.css"
import logo from "../../assets/img/Bella.svg"
import { Link } from "react-router-dom";
const Registration = () => {
    return ( 
        <div className={classes.modal}>
        <div className={classes.img}><img alt="logo" src={logo} /></div>
        <form className={classes.form}>
           <p className={classes.registr}>Регистрация</p>
           <label className={classes.label}>Ваше имя </label>
           <input  className={classes.input} placeholder="Имя"/>
           <label className={classes.label}>Ваша фамилия </label>
           <input  className={classes.input} placeholder="Фамилия"/>
           <label className={classes.label}>Номер телефона</label>
           <input  className={classes.input} placeholder=" Номер телефона"/>
            <div className={classes.box}><input type="checkbox"/> <Link>Согласен с условиями публичной аферты</Link> </div>
           <button className={classes.button}>ВОЙТИ</button>
           

        </form>

    
       
   </div>
     );
}
 
export default Registration;