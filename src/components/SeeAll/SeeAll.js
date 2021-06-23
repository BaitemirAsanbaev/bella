import { Link } from "react-router-dom";
import classes from "./SeeAll.module.scss"

const SeeAll = ({url}) => {
  return ( <div className={classes.view}>
    <Link to={`/${url}`}>
    Смотреть все {'>'}
    </Link>
  </div> );
}
 
export default SeeAll;