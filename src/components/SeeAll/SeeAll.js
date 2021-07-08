import { Link } from "react-router-dom";
import classes from "./SeeAll.module.scss"

const SeeAll = (props) => {

  const className = [classes.view]

  if(props.home){
    className.push(classes.home)
  }
  if(props.news){
    className.push(classes.news)
  }

  return ( <div className={className.join(" ")}>
    <Link to={`/${props.url}`}>
    {props.news ? "Подробнее": "Смотреть все"} {'>'}
    </Link>
  </div> );
}
 
export default SeeAll;