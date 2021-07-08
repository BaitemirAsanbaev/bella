import classes from "./Cotegories.module.scss"
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";
import Location from "../../containers/Location/Location";

const Cotegories = () => {

  const products = useSelector(state=>state);

  const output = Object.values(products).map((item)=>{
    return <Card key={item.id}
    title={item.title}
    size={item.size}
    cotegory={item.cotegory}
    price={item.price}
    id={item.id}/>
  })
  

  return ( <div className={classes.Cotegories}>
    <Location currentLocation="Товары"/>
    <div className={classes.container}>
    <div className={classes.types}>
      <select>
        <option>Платья</option>
        <option>Туники</option>
        <option>Футболки</option>
        <option>Верхняя одежда</option>
        <option>Шорты</option>
      </select>
    </div>
    <div className={classes.main}>
      <div className={classes.title}>
        <h1>Все товары</h1>
        <select>
          <option>По алфавиту</option>
          <option>По цене (высокая{' > '}низкая)</option>
          <option>По цене (низкая{' > '}высокая)</option>
        </select>
      </div>
      <div className={classes.cards}>
        {output}
      </div>
    </div>
    </div>
  </div> );
}
 
export default Cotegories;