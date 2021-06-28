import classes from "./Info.module.scss"
import { NavLink } from "react-router-dom";
import Location from "../../containers/Location/Location";

const Info = ({match}) => {

  const output = [];

  switch (match.params.id) {
    case "delivery":
      output.push(<>
        <h1>Доставка</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus</p>
      </>)
      break;

    case "contacts":
      output.push(<>
        <h1>Контакты</h1>

      </>)
      break;
  
    default:
      break;
  }

  return ( <div className={classes.Info}>
    <Location currentLocation="Доставка"/>
    <div className={classes.infoContainer}>
      <div className={classes.links}>
        <NavLink to="/info/delivery" activeClassName={classes.active}>Доставака</NavLink>
        <NavLink to="/info/contacts" activeClassName={classes.active}>Контакты</NavLink>
        <NavLink to="faq" activeClassName={classes.active}>Вопросы и ответы</NavLink>
      </div>
      <div className={classes.content}>{output}</div>
    </div>
  </div> );
}
 
export default Info;