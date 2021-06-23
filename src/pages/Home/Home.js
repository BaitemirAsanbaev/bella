import classes from './Home.module.scss';
import HomeCollections from '../../components/HomeCollections/HomeCollections';
import Hit from '../../components/Hit/Hit';
import Subscription from '../../components/Subscription/Subscription';

const Home = () => {
  return ( <div className={classes.Home}>
    <div style={{width: "100%", height: "664px", backgroundColor: "#aff4ab"}}></div>
    <HomeCollections/>
    <Hit title="Хит продаж"/>
    <Hit title="Новинки"/>
    <HomeCollections/>
    <Subscription/>
  </div> );
}
 
export default Home;