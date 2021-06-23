import classes from "./Card.module.scss"
import { Link } from "react-router-dom"

const colors = [
  'grey',
  'green',
  'brown',
  'yellow',
  'coral',
  'black',
  'blue'
]

const  colorDivs = colors.map((item)=>{
  return <div key={item} style={{backgroundColor: item, width: "8px", height: "8px" }}></div>
})

const Card = ({title, price, size, id}) => {
  return (<Link to={`/product/${id}`} className={classes.Card}>
    <div className={classes.img}>
    </div>
    <div className={classes.info}>
      <div className={classes.text}>
        <span>{price}</span>
        <span>{title}</span>
        <span>{size}</span>
      </div>
      <div className={classes.colors}>
        {colorDivs}
      </div>
  </div></Link> );
}
 
export default Card;