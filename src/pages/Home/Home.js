import classes from './Home.module.scss';
import HomeCollections from '../../components/HomeCollections/HomeCollections';
import Hit from '../../components/Hit/Hit';
import Subscription from '../../components/Subscription/Subscription';
import Slider from "../../components/Slider/Slider"

const Home = () => {
  return ( <div className={classes.Home}>
    <Slider/>
    <HomeCollections/>
    <Hit title="Хит продаж"/>
    <Hit title="Новинки"/>
    <HomeCollections/>
    <Subscription/>
  </div> );
}
 
export default Home;