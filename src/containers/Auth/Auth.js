import classes from './Auth.module.css'
import logo from '../../assets/img/Bella.svg'
import { Link } from 'react-router-dom';

const Auth = () => {
    return ( 
        <div className={classes.modal}>
             <div className={classes.img}><img alt="logo" src={logo} /></div>
             <form className={classes.form}>
                <p>ВХОД</p>
                <input  className={classes.input} placeholder="Введите номер телефона"/>
                <button className={classes.button}>ВОЙТИ</button>
              <Link to="/registration"><p className={classes.p}>Зарегистрироваться</p></Link>  

             </form>

         
            
        </div>
     );
}
 
export default Auth;