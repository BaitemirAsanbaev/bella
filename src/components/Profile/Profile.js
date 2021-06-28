import classes from "./Profile.module.css"
import profile from "../../assets/img/Profile.png"
import Bella from "../../assets/img/Bella.png"

const Profile = () => {
    return ( 
        <div>
          <div className={classes.container}>
            <div className={classes.wrapp}> 
                
                <form className={classes.form}>
        <h2 className={classes.registr}>Профиль</h2>
            <label className={classes.label}>Ваше имя </label>
            <input className={classes.input} placeholder="Имя" />
            <label className={classes.label}>Ваша фамилия </label>
            <input className={classes.input} placeholder="Фамилия" />
            <label className={classes.label}>Номер телефона</label>
            <input className={classes.input} placeholder=" Номер телефона" />
        <button className={classes.button}>ВОЙТИ</button>
      </form>

      <form className={classes.form}>
        <h2 className={classes.registr}>Адрес доставки</h2>
            <label className={classes.label}>Ваше имя </label>
            <input className={classes.input} placeholder="Имя" />
            <label className={classes.label}>Ваша фамилия </label>
            <input className={classes.input} placeholder="Фамилия" />
        <button className={classes.button}>ВОЙТИ</button>
      </form>
            </div>

            <div className={classes.img}>  
                 <div className={classes.bell}><img src={Bella} alt="Bell"/></div>
                <img src={profile} alt="profile"/>
                
            </div>
          </div>

          

        </div>
     );
}
 
export default Profile;
