import classes from "./Confirmation.module.css";
import logo from "../../assets/img/Bella.svg";
import React from "react";
import { useState, useEffect } from "react";

const Confirmation = () => {
  const [phone, setPhone] = useState("");
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [phoneError, setPhoneError] = useState("Ввдите номер телефона");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (phoneError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [phoneError]);

  const phoneHandler = (e) => {
    setPhone(e.target.value);
    const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,6}$/im;
    if (!re.test(Number(e.target.value))) {
      setPhoneError("Введите ваш номер");
    
    } else {
      setPhoneError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "phone":
        setPhoneDirty(true);
        break;
      default:
        break;
    }
  };
  const handlClick = (e) => {
    if (!formValid){
     e.preventDefault();
    }
  }

  return (
    <div className={classes.modal} >
      <div className={classes.img}>
        <img alt="logo" src={logo} />
      </div>
      <form className={classes.form} onSubmit={(e) => blurHandler(e)}>
        <p>ВХОД</p>
        <input
          required
          onChange={(e) => phoneHandler(e)}
          value={phone}
          className={classes.input}
          placeholder="Введите номер телефона"
          name="phone"
          onBlur={(e) => blurHandler(e)}
        />
        <button className={classes.button} onClick={handlClick}>
          Продолжить
        </button>
        
          <p className={classes.p}>Не пришло SMS сообщения?</p>

          <button className={classes.repeatButton}><p>Отправить снова</p> <p>00:59</p></button>
      
        {phoneDirty && phoneError && (
          <div className={classes.error} style={{ color: "red" }}>
            {phoneError}
          </div>
        )}
      </form>
    </div>
  );
};

export default Confirmation;