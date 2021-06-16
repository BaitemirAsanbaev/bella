import classes from './Auth.module.css'
import logo from '../../assets/img/Bella.svg'
import { Link } from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from 'react';


const Auth = () => {
  const [phone, setPhone] = useState('')
  const [phoneDirty, setPhoneDirty] = useState(false)
  const [phoneError, setPhoneError] = useState('Ввдите номер телефона')
  const [formValid, setFormValid] = useState(false)

  useEffect( () =>{
      if(phoneError){
       setFormValid(false)
      }else{
        setFormValid(true)
      }
  }, [phoneError])

  const phoneHandler = (e) => {
    setPhone(e.target.value)
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    if (!re.test(Number(e.target.value))) {
      setPhoneError('Введите ваш номер')
    } else {
      setPhoneError("")
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'phone':
        setPhoneDirty(true)
        break
      default:
        break
    }
  }

  return (
    <div className={classes.modal}>
      <div className={classes.img}><img alt="logo" src={logo} /></div>
      <form className={classes.form}>
        <p>ВХОД</p>
        <input onChange={e => phoneHandler(e)} value={phone} className={classes.input} placeholder="Введите номер телефона" name='phone' onBlur={e => blurHandler(e)} />
        <button disabled={!formValid} className={classes.button}>ВОЙТИ</button>
        <Link to="/registration"><p className={classes.p}>Зарегистрироваться</p></Link>
        {(phoneDirty && phoneError) && <div className={classes.error} style={{ color: 'red'} }>{phoneError}</div>}
      </form> 
    </div>
  );
}

export default Auth;
