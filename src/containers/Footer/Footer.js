import classes from "./Footer.module.scss";
import { Link } from "react-router-dom";
import ok from "../../assests/images/ok.svg";
import vk from "../../assests/images/vk.svg";
import inst from "../../assests/images/inst.svg";
import fb from "../../assests/images/fb.svg";

const Footer = () => {
  return ( <div className={classes.Footer}>
    <div className={classes.links}>
      <ul>
        <h6>Покупателям</h6>
        <li><Link>Как сделать заказ</Link></li>
        <li><Link>Способы оплаты</Link></li>
        <li><Link>Доставка</Link></li>
      </ul>
      <ul>
        <h6>Покупателям</h6>
        <li><Link>Возврат товара</Link></li>
        <li><Link>Вопросы и ответы</Link></li>
        <li><Link>Публичная оферта</Link></li>
      </ul>
      <ul>
        <h6>Компания</h6>
        <li><Link>О нас</Link></li>
        <li><Link>Реквизиты</Link></li>
        <li><Link>Контакты</Link></li>
      </ul>
      <ul>
        <h6>Контакты</h6>
        <li>+996 778 898 776</li>
        <li>mail@zulya.kg</li>
        <li>г.Бишкек, Чуй 23</li>
      </ul>
    </div>
    <div className={classes.otherInfo}>
      <small>Developed by Sunrise Studio 2021</small>
      <div>
        <a><img alt="icon" src={ok}/></a>
        <a><img alt="icon" src={vk}/></a>
        <a><img alt="icon" src={inst}/></a>
        <a><img alt="icon" src={fb}/></a>
      </div>
    </div>
  </div> );
}
 
export default Footer;