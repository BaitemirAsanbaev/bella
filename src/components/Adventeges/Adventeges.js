import classes from "./Adventeges.module.scss"
import money from "../../assests/images/money-icon.svg"
import truck from "../../assests/images/truck-icon.svg"
import support from "../../assests/images/support-icon.svg"
import shop from "../../assests/images/shop-icon.svg"


const Adventeges = () => {
  return ( <div className={classes.Adventeges}>
    <h1>Наши преимущества</h1>
    <div className={classes.container}>
      <div>
        <img src={money}/>
        <h2>Возможность оплаты при получении</h2>
        <p>Мы предлагаем возможность оплаты наложенным платежом (при получении)</p>
      </div>
      <div>
        <img src={truck}/>
        <h2>Возможность оплаты при получении</h2>
        <p>Мы предлагаем возможность оплаты наложенным платежом (при получении)</p>
      </div>
      <div>
        <img src={support}/>
        <h2>Возможность оплаты при получении</h2>
        <p>Мы предлагаем возможность оплаты наложенным платежом (при получении)</p>
      </div>
      <div>
        <img src={shop}/>
        <h2>Возможность оплаты при получении</h2>
        <p>Мы предлагаем возможность оплаты наложенным платежом (при получении)</p>
      </div>
    </div>

    </div> );
}
 
export default Adventeges;