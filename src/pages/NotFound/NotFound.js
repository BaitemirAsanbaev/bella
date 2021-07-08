import classes from  "./NotFound.module.scss";
import white_logo from "../../assests/images/bella-logo-white.svg"
import img_404 from "../../assests/images/404-img.png"
import four from "../../assests/images/four.png"
import zero from "../../assests/images/zero.png"

const NotFound = () => {
  return ( <div className={classes.NotFound}>
    <div className={classes.white_logo}>
      <img alt="bella" src={white_logo}/>
    </div>
    <div className={classes.img_404_div}>
      <div className={classes.digits}>
        <img alt="404" src={four}/>
        <img alt="404" src={zero}/>
        <img alt="404" src={four}/>
      </div>
      <div className={classes.img_404} style={{backgroundImage: `url(${img_404})`}}>
        Упс, страница не найдена!
      </div>
    </div>
  </div> );
}
 
export default NotFound;