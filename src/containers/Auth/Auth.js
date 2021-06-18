import classes from './Auth.module.css'
import logo from '../../assets/img/Bella.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react'


const Auth = () => {

     
     const [tel, setTel] = useState("");
     const [error, setError] = useState(false);
     function checkError(){
          if(tel === ""){
               setError(true);
          }
     }

     const errorMessage = <span>Введите ноиер телевона</span>

    return ( 
        <div className={classes.modal}>
             <div className={classes.img}><img alt="logo" src={logo} /></div>
             <form className={classes.form}>
                <p>ВХОД</p>
                <input
                required
                className={classes.input}
                placeholder="Введите номер телефона"
                onInput={(event)=>setTel(event.target.value)}/>
                <button className={classes.button} onClick={checkError}>ВОЙТИ</button>
                {error} ? {errorMessage} : null
              <Link to="/registration"><p className={classes.p}>Зарегистрироваться</p></Link>  
             
             </form>

         
            
        </div>
     );
}
 
export default Auth;