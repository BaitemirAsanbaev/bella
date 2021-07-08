import SeeAll from "../SeeAll/SeeAll"
import classes from "./HomeCollections.module.scss"

const HomeCollections = () => {
  return ( <div className={classes.HomeCollections}>
    <div className={classes.card}>
      <div className={classes.cardPreview}>
        <span>Летнее платье</span>
      </div>      
      <SeeAll url="collections"/>
    </div>
    <div className={classes.card}>
      <div className={classes.cardPreview}>
        <span>Летнее платье</span>
      </div>
      <SeeAll url="collections"/>
    </div>
    <div className={classes.card}>
      <div className={classes.cardPreview}>
        <span>Летнее платье</span>
      </div>
      <SeeAll url="collections"/>
    </div>
    <div className={classes.card}>
      <div className={classes.cardPreview}>
        <span>Летнее платье</span>
      </div>
      <SeeAll url="collections"/>
    </div>
  </div> );
}
 
export default HomeCollections;