import classes from "./Subscription.module.scss"
import sub_img from "../../assests/images/sub-img.png"
import bell_icon from "../../assests/images/bell.svg"

const Subscription = () => {
  return ( <div className={classes.Subscription}>
    <div className={classes.sub_container}>
      <img alt="sub" src={sub_img}/>
      <div className={classes.info}>
        <h2>Оформить подписку</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, id feugiat nec in sed eget. Turpis purus, sollicitudin quis augue consectetur lectus pharetra in ullamcorper. Sapien tortor, nunc venenatis aliquam accumsan, arcu, nibh adipiscing mattis. Bibendum ornare at porta sed eget ullamcorper porttitor faucibus tellus. Elit ullamcorper lorem in mauris.
        </p>
        <form>
          <input type="text" placeholder="Ваше Ф.И.О"/>
          <input type="text" placeholder="WhatsApp номер"/>
          <select>
            <option>Платья</option>
            <option>Верхняя одежда</option>
            <option>Пальто</option>
            <option>Туники</option>
          </select>
          <button><img alt="bell" className={classes.bell} src={bell_icon}/>Подписаться</button>
        </form>
      </div>
    </div>

  </div> );
}
 
export default Subscription;