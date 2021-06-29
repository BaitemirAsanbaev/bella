import { Link } from "react-router-dom";
import classes from "./SeeAll.module.scss"

const SeeAll = (props) => {

  const className = [classes.view]

  if(props.home){
    className.push(classes.home)
  }

  return ( <div className={className.join(" ")}>
    <Link to={`/${props.url}`}>
    Смотреть все {'>'}
    </Link>
  </div> );
}
 
export default SeeAll;