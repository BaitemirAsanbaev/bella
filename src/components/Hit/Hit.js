import classes from "./Hit.module.scss"
import Card from "../Card/Card";
import SeeAll from "../SeeAll/SeeAll";
import { useSelector } from "react-redux";

const Hit = ({title}) => {

  const products = useSelector(state=>state)

  console.log(products);

  const output = Object.values(products).map((item)=>{
    return <Card
    key={item.id}
    title={item.title}
    size={item.size}
    cotegory={item.cotegory}
    price={item.price}
    id={item.id}/>
  
  })

  return ( <div className={classes.Hit}>
    <h1>{title}</h1>
    <div>
      {output}
    </div>
    <div className={classes.seeAll}>
      <SeeAll url="cotegories"/>
    </div>
  </div> );
}
 
export default Hit;